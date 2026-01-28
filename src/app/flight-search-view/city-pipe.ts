import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Hamburg':
        return 'Helmut Schmidt Airport';
      case 'München':
        return 'Franz Josef Strauß Airport';
    }
    return value;
  }

}
