import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoancalculatorComponent } from './loancalculator/loancalculator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoancalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
