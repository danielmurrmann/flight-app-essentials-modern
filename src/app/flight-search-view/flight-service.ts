import { Injectable, Resource, Signal } from '@angular/core';
import { Flight } from '../entities/flight';
import { DefaultFlightService } from './default-flight-service';

export type FlightSearchCriteria = {
  from: string;
  to: string;
}

@Injectable({
  providedIn: 'root',
  useClass: DefaultFlightService
})
export abstract class FlightService {
  abstract createFlightsResource(criteria: Signal<FlightSearchCriteria | undefined>): Resource<Flight[]>;
}
