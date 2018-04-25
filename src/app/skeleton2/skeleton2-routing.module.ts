/**
 * Every route in this routing module is a child route
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { Skeleton2DetailsComponent } from './skeleton2-details/skeleton2-details.component';

const routes: Routes = [
  {
    // The path in AppRoutingModule is already set
    path: '',
    component: Skeleton2DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Skeleton2RoutingModule { }
