import { Component, OnInit } from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'ngx-webstorage';

// Service
import { Skeleton2DetailsService } from '../skeleton2-details.service';
// Interface
import { UserData, UserDetails, Data } from '../skeleton2.interface';

@Component({
  selector: 'app-skeleton2-details',
  templateUrl: './skeleton2-details.component.html',
  styleUrls: ['./skeleton2-details.component.scss'],
  providers: [NGXLogger]
})
export class Skeleton2DetailsComponent implements OnInit {

  public title: string;
  // public title: string = 'skeleton2 details works!';
  public attribute: string;
  public userData: UserData;
  public name: string;
  public job: string;
  public userDetails: Data;

  // decorator to create key for local storage
  @LocalStorage()
  public boundValue;

  // decorator to store boundValue inside boundAttribute
  @LocalStorage('boundValue')
  boundAttribute;
  // Called before any other lifecycle hook. Use it to inject dependencies
  // constructor(
  constructor(private logger: NGXLogger,
    private localStorageService: LocalStorageService,
    private skeleton2DetailsService: Skeleton2DetailsService
  ) {
    this.logger.debug('Your log message goes here');
    this.logger.debug('Multiple', 'Argument', 'support');
  }

  ngOnInit() {

    this.title = 'skeleton2 details works!';
    // to check is local storage is available. IsStorageAvailable():boolean
    const isAvailable = this.localStorageService.isStorageAvailable();
    console.log(isAvailable);

    // watch if the  value of local storage 'key' is changed
    this.localStorageService.observe('boundValue')
      .subscribe((newValue) => {
        console.log(newValue);
      });

    // **** show which level is running.
    this.logger.debug('debug');
    this.logger.info('info');
    this.logger.log('log');
    // this.logger.trace('trace');
    // this.logger.warn('warn');
    // this.logger.error('error');
  }

  // create or update an item in the local storage
  saveValue() {
    // Store( key:string, value:any ):void
    this.localStorageService.store('boundValue', this.attribute);
  }

  clearItem() {
    // Clear( key?:string ):void
    this.localStorageService.clear('boundValue');
    // this.storage.clear();
    // clear all the managed storage items
  }

  getGreetings() {
    const url = '/api/users/2';
    this.skeleton2DetailsService.getGreetings(url)
      .subscribe((data) => {
        this.userData = data;
        console.log(data);
        console.log(this.userData);
      }, (error) => {
        // Error
        console.log(error);
      });
  }

  createUsers() {
    const url = '/api/users';
    const users: UserDetails = {
      'name': this.name,
      'job': this.job
    };
    this.skeleton2DetailsService.createUsers(url, users)
      .subscribe((data) => {
        this.userDetails = data;
        console.log(data);
      }, (error) => {
        // Error
        console.log(error);
      });
  }

  deleteUsers() {
    const url = '/api/users/';
    const id = 2;
    this.skeleton2DetailsService.deleteUsers(url, id)
      .subscribe((data) => {
        this.userDetails = data._body;
        console.log(data);
      }, (error) => {
        // Error
        console.log(error);
      });
  }

  /**
   * Dummy login methods
   */
  needsLogin() {
    return !this.skeleton2DetailsService.isAuthenticated();
  }
}
