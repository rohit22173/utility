import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShippingInfoComponent } from './shipping.info.component';

@NgModule({
  declarations: [
    ShippingInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [ShippingInfoComponent]
})
export class ShippingInfoModule { }
