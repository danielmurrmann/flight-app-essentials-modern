import { httpResource } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Flight } from '../entities/flight';

export type FlightSearchCriteria = {
  from: string;
  to: string;
}

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private readonly url = 'https://demo.angulararchitects.io/api/flight';

  createFlightsResource(criteria: Signal<FlightSearchCriteria | undefined>) {
    return httpResource<Flight[]>(() => {
      const params = criteria();
      if(params === undefined) return undefined;
      else return {
        url: this.url,
        params,
      };
    }, { 
      defaultValue: []
    });
  }
}
