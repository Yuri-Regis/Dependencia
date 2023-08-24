import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomNumberComponent } from './random-number/random-number.component';
import { NumberDisplayComponent } from './number-display/number-display.component';

@NgModule({
  declarations: [
    RandomNumberComponent,
    NumberDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RandomNumberComponent,
    NumberDisplayComponent
  ]
})
export class AppRootModule { }
