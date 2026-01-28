import { httpResource } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Flight } from '../entities/flight';
import { FlightSearchCriteria, FlightService } from './flight-service';

export class DummyFlightService implements FlightService {
  createFlightsResource(criteria: Signal<FlightSearchCriteria | undefined>) {
    const dummyFlights: Flight[] = [
      { id: 1, from: 'Hamburg', to: 'Berlin', date: '2026-01-29T10:00:00Z', delayed: false },
      { id: 2, from: 'Munich', to: 'Cologne', date: '2026-01-30T12:00:00Z', delayed: true },
    ];
    return httpResource<Flight[]>(() => undefined, { 
      defaultValue: dummyFlights
    });
  }
}
