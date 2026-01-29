import { Component, input } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-text-field',
  imports: [FormField],
  templateUrl: './text-field.html',
  styleUrl: './text-field.css',
})
export class TextField {
  value = input.required<FieldTree<string>>();
}
