import { Component, OnInit } from '@angular/core';

import { Trip } from './../../trip';
import { TripService } from './../../trip.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  trips: Trip[] = [];

  constructor(private tripervice: TripService) { }

  ngOnInit(): void {
    this.tripervice.getTrips()
      .then(trips => this.trips = trips.slice(1, 5));
  }
}