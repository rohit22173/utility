import { Component, Input } from '@angular/core';

@Component({
  selector: 'delivery-info',
  templateUrl: 'delivery.info.component.html',
  styleUrls: ['delivery.info.component.scss'],
  providers: []
})
export class DeliveryInfoComponent {

  @Input() data = {};

  constructor() {

  }


}
