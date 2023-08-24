import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-number-display',
  template: `
    <h1 *ngIf="randomNumber !== undefined">Random Number: {{ randomNumber }}</h1>
  `
})
export class NumberDisplayComponent {
  constructor(private dataService: DataService) { }

  get randomNumber() {
    return this.dataService.getRandomNumber();
  }
}
