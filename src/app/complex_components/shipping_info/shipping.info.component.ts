import { Component, Input } from '@angular/core';

@Component({
  selector: 'shipping-info',
  templateUrl: 'shipping.info.component.html',
  styleUrls: ['shipping.info.component.scss'],
  providers: []
})
export class ShippingInfoComponent {

  @Input() data = {};

  constructor() {

  }


}
