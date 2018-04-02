/**
 * The goal is to test pieces of code in isolation without needing to know about the inner workings of their dependencies.
 * We do this by creating Mocks; we can create Mocks using fake classes, extending existing classes or
 * by using real instances of classes but taking control of them with Spys.
 */
import { fakeAsync, TestBed, inject } from '@angular/core/testing';

import { Skeleton2DetailsService } from './skeleton2-details.service';
import { HttpService } from '../utils/services/http.service';
import { of } from 'rxjs/observable/of';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
// Import the HttpModule and provide ConnectionBackend to resolve StaticInjectorError
import { HttpModule, ConnectionBackend, Http, ResponseOptions, Response } from '@angular/http';

// Create some fake data we want the API to response with.
const mockResponse = {
  'data': {
    'id': 2,
    'first_name': 'Manish',
    'last_name': 'Verma',
    'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
  }
};

fdescribe('Skeleton2DetailsService', () => {

  let service: Skeleton2DetailsService;
  let mockHttp: HttpService;


  beforeEach(() => {

    mockHttp = { get: null } as HttpService;
    // Create a spy for its get method and
    // return an observable similar to what the real Http service would do.
    spyOn(mockHttp, 'get').and.returnValue(Observable.of({
      json: () => mockResponse
    }));

    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        Skeleton2DetailsService,
        // NO! Don't provide the real service!
        // HttpService,
        // Provide a test-double (stubs, fakes, spies, or mocks) instead
        {
          provide: HttpService,
          useValue: mockHttp
        },
        ConnectionBackend
      ]
    });
  });

  it('should be created', inject([Skeleton2DetailsService], (service: Skeleton2DetailsService) => {
    expect(service).toBeTruthy();
  }));

  it('can instantiate service via DI', () => {
    service = TestBed.get(Skeleton2DetailsService);
    expect(service instanceof Skeleton2DetailsService).toBe(true);
  });

  // Use the fakeAsync method to execute in the special fake async zone and track pending Observable
  it('should get search results', fakeAsync(
    inject([Skeleton2DetailsService], (service: Skeleton2DetailsService) => {
      const expectedUrl = '/api/users/2';
      // Make the asynchronous call
      service.getGreetings(expectedUrl)
        .subscribe(res => {
          expect(mockHttp.get).toHaveBeenCalledWith(expectedUrl);
          expect(res).toEqual(mockResponse);
        });
    })
  ));
});
