import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-details',
  templateUrl: 'list.details.component.html',
  styleUrls: ['list.details.component.scss'],
  providers: []
})
export class ListDetailsComponent {

  @Input() data = {};

  constructor() {

  }


}
