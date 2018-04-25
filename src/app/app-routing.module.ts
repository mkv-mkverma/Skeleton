/**
 * In the AppRoutingModule, you configure the routes to the feature modules, in this case Skeleton1Module and Skeleton2Module.
 *
 * This way, the router knows to go to the feature module.
 *
 * The feature module then connects the AppRoutingModule to the Skeleton1RoutingModule or the Skeleton2RoutingModule.
 *
 * Those routing modules tell the router where to go to load relevant components.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'skeleton1',
    loadChildren: 'app/skeleton1/skeleton1.module#Skeleton1Module'
  },
  {
    path: 'skeleton2',
    loadChildren: 'app/skeleton2/skeleton2.module#Skeleton2Module'
  },
  {
    path: 'not-found',
    loadChildren: './not-found/not-found.module#NotFoundModule'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
