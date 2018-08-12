import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'list-details',
  templateUrl: 'list.details.component.html',
  styleUrls: ['list.details.component.scss'],
  providers: []
})
export class ListDetailsComponent implements OnInit{

  @Input() data = {};

  constructor( private _sharedService: SharedService,
               private _route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log(this._route.snapshot.data);
    this.data = this._route.snapshot.data['data'][0];
  }



}
