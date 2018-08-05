import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListPageService {
    constructor(private http: HttpClient) { }

    public getDeviceDetails() {
        return this.http.get('../../../data.json');
    }
}