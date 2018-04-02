/**
 * This module is like a connector between the AppRoutingModule and the Skeleton1RoutingModule
 *
 * Imports the Skeleton1RoutingModule and Skeleton1DetailsComponent so the Skeleton1Module class can have access to them.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { Skeleton1RoutingModule } from './skeleton1-routing.module';

// Components
import { Skeleton1DetailsComponent } from './skeleton1-details/skeleton1-details.component';

// Services
import { Skeleton1DetailsService } from './skeleton1-details.service';

@NgModule({
  imports: [
    CommonModule,
    Skeleton1RoutingModule
  ],
  declarations: [Skeleton1DetailsComponent],
  providers: [Skeleton1DetailsService]
})
export class Skeleton1Module { }
