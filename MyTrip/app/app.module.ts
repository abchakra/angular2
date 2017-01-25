import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DatepickerModule, AlertModule, AccordionModule } from 'ng2-bootstrap';

import { TripDetailComponent } from './components/tripdetail/trip-detail.component';
import { TripService } from './trip.service';
import { TripsComponent } from './components/trips/trips.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule, FormsModule, AppRoutingModule,
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    TripDetailComponent,
    TripsComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent],
  providers: [TripService],

})
export class AppModule { }
