import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimInfoComponent } from './sim.info.component';
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    SimInfoComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule
  ],
  providers: [],
  exports: [SimInfoComponent]
})
export class SimInfoModule { }
