import { Component, input, linkedSignal, output } from '@angular/core';
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
  selectedChange = output<boolean>();

  select() {
    this.selectedInternal.set(true);
    this.selectedChange.emit(true);
  }

  deselect() {
    this.selectedInternal.set(false);
    this.selectedChange.emit(false);
  }
}
