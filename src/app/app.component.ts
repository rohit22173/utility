import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [AppService]
})
export class AppComponent {
  public data = {};

  constructor(private _appService : AppService) {
  }

  ngOnInit () {
    this.getDeviceDetailsData()
  }

  public getDeviceDetailsData() {
    this._appService.getDeviceDetails()
        .subscribe(data => this.data = data);
  }
}
