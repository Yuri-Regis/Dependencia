import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private randomNumber!: number;

  constructor() { }

  setRandomNumber(number: number) {
    this.randomNumber = number;
  }

  getRandomNumber(): number {
    return this.randomNumber;
  }
}
