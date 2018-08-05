import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShippingDetailsComponent } from './shipping.details.component';

@NgModule({
  declarations: [
    ShippingDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [ShippingDetailsComponent]
})
export class ShippingDetailsModule { }
