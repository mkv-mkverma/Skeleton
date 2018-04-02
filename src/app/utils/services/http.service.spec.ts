import { TestBed, inject } from '@angular/core/testing';

// Service
import { HttpService } from './http.service';

// import the HttpModule and provide ConnectionBackend to resolve StaticInjectorError
import { HttpModule, ConnectionBackend } from '@angular/http';

fdescribe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HttpService, ConnectionBackend]
    });
  });

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
