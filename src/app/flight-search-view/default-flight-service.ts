import { httpResource } from '@angular/common/http';
import { inject, Injectable, InjectionToken, Signal } from '@angular/core';
import { Flight } from '../entities/flight';
import { FlightSearchCriteria, FlightService } from './flight-service';

export const BASE_URL = new InjectionToken<string>('BASE_URL', {
  providedIn: 'root',
  factory: () => 'https://demo.angulararchitects.io/api'
});

@Injectable({
  providedIn: 'root',
})
export class DefaultFlightService implements FlightService {
  private baseUrl = inject(BASE_URL);

  createFlightsResource(criteria: Signal<FlightSearchCriteria | undefined>) {
    const url = `${this.baseUrl}/flight`;
    return httpResource<Flight[]>(() => criteria() ? { url, params: criteria() } : undefined, {
      defaultValue: []
    });
  }
}
