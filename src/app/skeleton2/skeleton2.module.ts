/**
 * This module is like a connector between the AppRoutingModule and the Skeleton2RoutingModule
 *
 * Imports the Skeleton2RoutingModule and Skeleton2DetailsComponent so the Skeleton2Module class can have access to them.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

// Modules
import { Skeleton2RoutingModule } from './skeleton2-routing.module';

// Components
import { Skeleton2DetailsComponent } from './skeleton2-details/skeleton2-details.component';

// Services
import { Skeleton2DetailsService } from './skeleton2-details.service';

// import utilsModule for custom pipe
import { UtilsModule } from '../utils';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Skeleton2RoutingModule,
    UtilsModule
  ],
  providers: [Skeleton2DetailsService],
  declarations: [Skeleton2DetailsComponent]
})
export class Skeleton2Module { }
