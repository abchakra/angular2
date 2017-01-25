import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { TripService } from './../../trip.service';


import { Trip } from './../../trip';
@Component({
  moduleId: module.id,
  selector: 'my-trip-detail',
  template: `
  <div *ngIf="trip">
    <h2>{{trip.header1}} details!</h2>
    <div><label>id: </label>{{trip.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="trip.header1" placeholder="header1"/>
    </div>
    <button (click)="goBack()">Back</button>
  </div>
`
})
export class TripDetailComponent implements OnInit {
  @Input()
  trip: Trip;


  constructor(
    private tripService: TripService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.tripService.getTrip(+params['id']))
      .subscribe(trip => this.trip = trip);
  }


  goBack(): void {
    this.location.back();
  }
}