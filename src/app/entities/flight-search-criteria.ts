import { schema, required, minLength, apply } from "@angular/forms/signals";

export type FlightSearchCriteria = {
  from: string;
  to: string;
};

export const initialFlightSearchCriteria: FlightSearchCriteria = {
  from: '',
  to: '',
};

export const flightSearchCriteriaSchema = schema<FlightSearchCriteria>((path) => {
  required(path.from, { message: 'From is required' });
  minLength(path.from, 3, { message: 'From must be at least 3 characters long' });
  required(path.to, { message: 'To is required' });
  minLength(path.to, 3, { message: 'To must be at least 3 characters long' });
});

export type AdvancedFlightSearchCriteria = {
    basicCriteria: FlightSearchCriteria;
    directFlightsOnly: boolean;
}

export const advancedFlightSearchCriteria = schema<AdvancedFlightSearchCriteria>((path) => {
    apply(path.basicCriteria, flightSearchCriteriaSchema);
    required(path.directFlightsOnly);
});