import { Component, Input } from '@angular/core';

@Component({
  selector: 'sim-info',
  templateUrl: 'sim.info.component.html',
  styleUrls: ['sim.info.component.scss'],
  providers: []
})
export class SimInfoComponent {

  @Input() data = {};

  constructor() {

  }


}
