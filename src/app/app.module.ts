import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {ChartModule, InputTextModule, ButtonModule, PasswordModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import 'hammerjs';
import { NgvasModule, tweens, hitAreas } from 'ngvas';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MatSliderModule, ChartModule, InputTextModule, ButtonModule, PasswordModule, NgvasModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
