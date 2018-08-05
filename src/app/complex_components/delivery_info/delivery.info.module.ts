import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DeliveryInfoComponent } from './delivery.info.component';

@NgModule({
  declarations: [
    DeliveryInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [DeliveryInfoComponent]
})
export class DeliveryInfoModule { }
