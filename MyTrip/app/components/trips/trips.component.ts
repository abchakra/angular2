import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trip } from './../../trip';
import { TripService } from './../../trip.service';

@Component({
    moduleId: module.id,
    selector: 'my-trips',
    templateUrl: 'trips.component.html',
})
export class TripsComponent implements OnInit {


    selectedTrip: Trip;
    trips: Trip[];
    ngOnInit(): void {
        this.getTrips();
    }
    constructor(private router: Router, private tripService: TripService) {

    }

    onSelect(trip: Trip): void {
        this.selectedTrip = trip;
    }
    getTrips(): void {
        this.tripService.getTrips().then(trips => this.trips = trips);
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedTrip.id]);
    }
}