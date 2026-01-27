import { Component, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('flight42!');
}
