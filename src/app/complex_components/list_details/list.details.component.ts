import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'list-details',
  templateUrl: 'list.details.component.html',
  styleUrls: ['list.details.component.scss'],
  providers: []
})
export class ListDetailsComponent implements OnInit{

  @Input() data = {};

  constructor( private _sharedService: SharedService ) {

  }

  ngOnInit() {
    this.data = this._sharedService.getSelectedItem();
  }



}
