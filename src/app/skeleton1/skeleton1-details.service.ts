import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Service
import { HttpService } from '../utils/services/http.service';

@Injectable()
export class Skeleton1DetailsService {

  // Called before any other lifecycle hook. Use it to inject dependencies
  constructor(private httpService: HttpService) { }
  // To get greetings from API by using get method
  getGreetings(url: any): Observable<any> {
    return this
      .httpService
      .get(url)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
