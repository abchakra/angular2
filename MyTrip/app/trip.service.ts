import { Injectable } from '@angular/core';
import { Trip } from './trip';

const TRIPS: Trip[] = [
  { id: 1, header1: 'Day1', header2: 'Start from Frankfurt', desc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,craft beer labore wes anderson cred nesciunt sapiente ea proident.', highlight: 'Coffee, Breakfast and Ice-cream' },
  { id: 2, header1: 'Day2', header2: 'Start from Frankfurt', desc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,craft beer labore wes anderson cred nesciunt sapiente ea proident.', highlight: 'Coffee, Breakfast and Ice-cream' },
  { id: 3, header1: 'Day3', header2: 'Start from Frankfurt', desc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,craft beer labore wes anderson cred nesciunt sapiente ea proident.', highlight: 'Coffee, Breakfast and Ice-cream' },
  { id: 4, header1: 'Day4', header2: 'Start from Frankfurt', desc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,craft beer labore wes anderson cred nesciunt sapiente ea proident.', highlight: 'Coffee, Breakfast and Ice-cream' },
  { id: 5, header1: 'Day5', header2: 'Start from Frankfurt', desc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,craft beer labore wes anderson cred nesciunt sapiente ea proident.', highlight: 'Coffee, Breakfast and Ice-cream' },
  { id: 6, header1: 'Day6', header2: 'Start from Frankfurt', desc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,craft beer labore wes anderson cred nesciunt sapiente ea proident.', highlight: 'Coffee, Breakfast and Ice-cream' },
];
@Injectable()
export class TripService {

  getTrips(): Promise<Trip[]> {
    return Promise.resolve(TRIPS);
  }

  getTrip(id: number): Promise<Trip> {
    return this.getTrips()
      .then(trips => trips.find(trip => trip.id === id));
  }
}