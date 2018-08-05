import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DeviceDetailsComponent } from './device.details.component';

@NgModule({
  declarations: [
    DeviceDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [DeviceDetailsComponent]
})
export class DeviceDetailsModule { }
