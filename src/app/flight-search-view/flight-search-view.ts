import { Component, effect, inject, signal } from '@angular/core';
import { Flight } from '../entities/flight';
import { form, FormField } from '@angular/forms/signals';
import { FlightSearchCriteria, FlightService } from './flight-service';
import { DefaultFlightService } from './default-flight-service';
import { FlightCard } from '../flight-card/flight-card';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-flight-search-view',
  imports: [FormField, FlightCard, JsonPipe],
  templateUrl: './flight-search-view.html',
  providers: [ { provide: FlightService, useClass: DefaultFlightService } ]
})
export class FlightSearchView {
  criteria = signal<FlightSearchCriteria>({ from: 'Hamburg', to: 'München' });
  form = form(this.criteria);
  selectedFlight = signal<Flight | undefined>(undefined);
  basket = signal<Record<number, boolean>>({});

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

  updateBasket(flightId: number, selected: boolean): void {
    this.basket.update(currentValue => ({ ...currentValue, [flightId]: selected}));
  }

}
