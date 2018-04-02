import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

// Service
import { HttpService } from '../utils/services/http.service';

import { UserDetails } from './skeleton2.interface';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

const headers = new Headers({ 'Content-Type': 'application/json' });
const options = new RequestOptions({ headers: headers });


@Injectable()
export class Skeleton2DetailsService {

  // Called before any other lifecycle hook. Use it to inject dependencies
  constructor(private httpService: HttpService) { }

  // To get greetings from API by using get method
  getGreetings(url: string): Observable<any> {
    return this
      .httpService
      .get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // To create user from API by using post method
  createUsers(url: string, body: UserDetails): Observable<any> {
    return this
      .httpService
      .post(url, body, options)
      .map(this.extractData)
      // .map((res: Response) => res)
      // .catch((error: any) => Observable.throw(error || 'Server error'));
      .catch(this.handleError);
  }

  // To delete user from API by using delete method
  deleteUsers(url: string, id: number | string): Observable<any> {
    if (typeof id === 'string') {
      id = parseInt(id as string, 10);
    }
    return this
      .httpService
      .delete(url + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Dummy method
   */
  isAuthenticated() {
    return true;
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    const body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    const errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return new ErrorObservable(errMsg);
  }
}
