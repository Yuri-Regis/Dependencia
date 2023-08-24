import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; // Importe o componente principal
import { AppRootModule } from './app-root/app-root.module'; // Importe o módulo raiz

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRootModule // Não inclua o módulo raiz aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
