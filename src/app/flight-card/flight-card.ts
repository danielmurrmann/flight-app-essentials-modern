import { Component, input, linkedSignal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { initialFlight } from '../entities/flight';
import { CityPipe } from '../flight-search-view/city-pipe';

@Component({
  selector: 'app-flight-card',
  imports: [DatePipe, CityPipe],
  templateUrl: './flight-card.html'
})
export class FlightCard {
  flight = input(initialFlight);
  selected = input(false);
  selectedInternal = linkedSignal(() => this.selected());

  select() {
    this.selectedInternal.set(true);
  }

  deselect() {
    this.selectedInternal.set(false);
  }
}
