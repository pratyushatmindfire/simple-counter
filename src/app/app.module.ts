import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterControllerComponent } from './counter-controller/counter-controller.component';
import { CounterService } from './counter-services/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    CounterControllerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
