import { inject, Injectable, Resource, Signal } from '@angular/core';
import { Flight } from '../entities/flight';
import { DefaultFlightService } from './default-flight-service';
import { DummyFlightService } from './dummy-flight-service';

export type FlightSearchCriteria = {
  from: string;
  to: string;
}

@Injectable({
  providedIn: 'root',
  useFactory: () => {
    const useDummyValues = true; //inject(ConfigurationService).useDummyValues;
    if(useDummyValues) return new DummyFlightService();
    else return inject(DefaultFlightService);
  }
})
export abstract class FlightService {
  abstract createFlightsResource(criteria: Signal<FlightSearchCriteria | undefined>): Resource<Flight[]>;
}
