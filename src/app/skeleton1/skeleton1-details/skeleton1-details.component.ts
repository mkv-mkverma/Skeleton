import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-skeleton1-details',
  templateUrl: './skeleton1-details.component.html',
  styleUrls: ['./skeleton1-details.component.scss']
})
export class Skeleton1DetailsComponent implements OnInit {

  public attribute: string;
  // Called before any other lifecycle hook. Use it to inject dependencies
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  retrieveValue() {
    // Retrieve( key:string ):any
    this.attribute = this.localStorageService.retrieve('boundValue');
  }
}
