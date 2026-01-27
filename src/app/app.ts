import { Component, signal, ViewEncapsulation } from '@angular/core';
import { FlightSearchView } from "./flight-search-view/flight-search-view";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [FlightSearchView]
})
export class App {
  protected readonly title = signal('flight42');
}
