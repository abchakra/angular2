import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TripDetailComponent } from './components/tripdetail/trip-detail.component';
import { TripsComponent } from './components/trips/trips.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: TripDetailComponent },
  { path: 'trips',     component: TripsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}