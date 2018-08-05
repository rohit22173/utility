import { Component, Input } from '@angular/core';

@Component({
  selector: 'shipping-details',
  templateUrl: 'shipping.details.component.html',
  styleUrls: ['shipping.details.component.scss'],
  providers: []
})
export class ShippingDetailsComponent {

  @Input() data = {};

  constructor() {

  }


}
