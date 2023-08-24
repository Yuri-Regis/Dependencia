import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-random-number',
  template: `
    <button (click)="generateRandomNumber()">Gerar Número Aleatório</button>
  `
})
export class RandomNumberComponent {
  constructor(private dataService: DataService) { }

  generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    this.dataService.setRandomNumber(randomNumber);
  }
}
