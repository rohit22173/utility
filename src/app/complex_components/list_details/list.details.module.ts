import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DeviceDetailsModule } from '../device_details/device.details.module';
import { SimInfoModule } from '../sim_info/sim.info.module';
import { MatCardModule } from '@angular/material';
import { BankInfoModule } from '../bank_info/bank.info.module';
import { ShippingInfoModule } from '../shipping_info/shipping.info.module';
import { DeliveryInfoModule } from '../delivery_info/delivery.info.module';
import { ShippingDetailsModule } from '../shipping_details/shipping.details.module';
import { ListDetailsComponent } from './list.details.component';

@NgModule({
  declarations: [
    ListDetailsComponent
  ],
  imports: [
    BrowserModule,
    DeviceDetailsModule,
    SimInfoModule,
    MatCardModule,
    BankInfoModule,
    ShippingInfoModule,
    DeliveryInfoModule,
    ShippingDetailsModule,
  ],
  providers: [],
  exports: [ListDetailsComponent]
})
export class ListDetailsModule { }
