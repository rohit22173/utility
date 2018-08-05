import { Component, Input } from '@angular/core';

@Component({
  selector: 'device-details',
  templateUrl: 'device.details.component.html',
  styleUrls: ['device.details.component.scss'],
  providers: []
})
export class DeviceDetailsComponent {

  @Input() data = {};

  constructor() {

  }


}
