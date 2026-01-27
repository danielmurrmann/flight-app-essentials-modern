import { Component, signal } from '@angular/core';
import { Flight } from '../entities/flight';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-flight-search-view',
  imports: [FormField],
  templateUrl: './flight-search-view.html'
})
export class FlightSearchView {
  criteria = signal({ from: 'Hamburg', to: 'München' });
  form = form(this.criteria);
  flights = signal<Flight[]>([]);
  selectedFlight = signal<Flight | undefined>(undefined);

  search(): void {
    const dummyFlights: Flight[] = [
      { id: 1, from: this.criteria().from, to: this.criteria().to, date: '2026-07-01', delayed: false },
      { id: 2, from: this.criteria().from, to: this.criteria().to, date: '2026-07-02', delayed: true }
    ];
    this.flights.set(dummyFlights);
  }

  select(flight: Flight): void {
    this.selectedFlight.set(flight);
  }

}
