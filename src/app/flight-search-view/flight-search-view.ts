import { Component, inject, signal } from '@angular/core';
import { Flight } from '../entities/flight';
import { debounce, form, FormField } from '@angular/forms/signals';
import { httpResource } from '@angular/common/http';
import { FlightSearchCriteria, FlightService } from './flight-service';


@Component({
  selector: 'app-flight-search-view',
  imports: [FormField],
  templateUrl: './flight-search-view.html'
})
export class FlightSearchView {
  criteria = signal<FlightSearchCriteria>({ from: 'Hamburg', to: 'München' });
  form = form(this.criteria);
  selectedFlight = signal<Flight | undefined>(undefined);

  flightService = inject(FlightService);

  flightsResourceParams = signal<FlightSearchCriteria | undefined>(undefined);
  flightsResource = this.flightService.createFlightsResource(this.flightsResourceParams);
  flights = this.flightsResource.value; 

  search(): void {
    this.flightsResourceParams.set(this.criteria());
  }

  select(flight: Flight): void {
    this.selectedFlight.set(flight);
  }

}
