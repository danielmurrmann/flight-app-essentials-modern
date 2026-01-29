import { Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-edit-view',
  imports: [],
  templateUrl: './flight-edit-view.html',
})
export class FlightEditView {
  id = input(0);
}
