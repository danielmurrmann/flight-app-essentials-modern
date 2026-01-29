import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-edit-view',
  imports: [],
  templateUrl: './flight-edit-view.html',
})
export class FlightEditView {
  activatedRoute = inject(ActivatedRoute);

  id = signal(0);

  constructor() {
    this.activatedRoute.params.subscribe(params => {
      this.id.set(params['id']);
    });
  }
}
