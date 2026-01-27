import { Component, signal } from '@angular/core';
import { Flight } from '../entities/flight';
import { debounce, form, FormField } from '@angular/forms/signals';
import { httpResource } from '@angular/common/http';

type FlightSearchCriteria = {
  from: string;
  to: string;
}

@Component({
  selector: 'app-flight-search-view',
  imports: [FormField],
  templateUrl: './flight-search-view.html'
})
export class FlightSearchView {
  criteria = signal<FlightSearchCriteria>({ from: 'Hamburg', to: 'München' });
  form = form(this.criteria);
  selectedFlight = signal<Flight | undefined>(undefined);

  url = 'https://demo.angulararchitects.io/api/flight';

  flightsResourceParams = signal<FlightSearchCriteria | undefined>(undefined);

  flightsResource = httpResource<Flight[]>(() => {
    const params = this.flightsResourceParams();
    if(params === undefined) return undefined;
    else return {
      url: this.url,
      params: this.flightsResourceParams()
    };
  }, { 
    defaultValue: []
  });

  flights = this.flightsResource.value; 

  search(): void {
    this.flightsResourceParams.set(this.criteria());
  }

  select(flight: Flight): void {
    this.selectedFlight.set(flight);
  }

}
