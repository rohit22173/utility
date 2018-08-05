import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BankInfoComponent } from './bank.info.component';

@NgModule({
  declarations: [
    BankInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [BankInfoComponent]
})
export class BankInfoModule { }
