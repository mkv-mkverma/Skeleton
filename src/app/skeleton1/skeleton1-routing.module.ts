/**
 * Every route in this routing module is a child route
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { Skeleton1DetailsComponent } from './skeleton1-details/skeleton1-details.component';

const routes: Routes = [
  {
    // The path in AppRoutingModule is already set
    path: '',
    component: Skeleton1DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Skeleton1RoutingModule { }
