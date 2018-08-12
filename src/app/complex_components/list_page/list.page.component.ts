import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';
import { ListPageService } from './list.page.service';

@Component({
  selector: 'list-page',
  templateUrl: 'list.page.component.html',
  styleUrls: ['list.page.component.scss'],
  providers: [ListPageService]
})
export class ListPageComponent implements OnInit {

  public dabId = new FormControl('', []);

  public data;

  constructor(private _router: Router,
              private _sharedService: SharedService,
              private _listPageService: ListPageService
  ) {

  }

  ngOnInit() {
    this.getDeviceDetailsData();
  }

  public getDeviceDetailsData() {
    this._listPageService.getDeviceDetails()
        .subscribe(data => {
          this.data = data;
          this._sharedService.setData(this.data);
        });
  }

  public cardClick(data) {
    var encodedString = btoa(data.dab_device_no);
   // this._sharedService.setSelectedItem(data);
    this._router.navigate(['dashboard', 'details', encodedString]);
  }

  public search(event) {
    if (event.keyCode === 13) {
      this._listPageService.searchByDabId(this.dabId.value)
          .subscribe(data => {
            this.data = data;
            this._sharedService.setData(this.data);
          });
    }
  }


}
