import { TestBed, inject } from '@angular/core/testing';
// Service
import { Skeleton1DetailsService } from './skeleton1-details.service';
import { HttpService } from '../utils/services/http.service';

// import the HttpModule and provide ConnectionBackend to resolve StaticInjectorError
import { HttpModule, ConnectionBackend } from '@angular/http';


fdescribe('Skeleton1DetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [Skeleton1DetailsService, HttpService, ConnectionBackend]
    });
  });

  it('should be created', inject([Skeleton1DetailsService], (service: Skeleton1DetailsService) => {
    expect(service).toBeTruthy();
  }));
});
