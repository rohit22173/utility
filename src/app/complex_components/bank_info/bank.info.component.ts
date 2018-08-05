import { Component, Input } from '@angular/core';

@Component({
  selector: 'bank-info',
  templateUrl: 'bank.info.component.html',
  styleUrls: ['bank.info.component.scss'],
  providers: []
})
export class BankInfoComponent {

  @Input() data = {};

  constructor() {

  }


}
