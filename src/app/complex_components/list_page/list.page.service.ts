import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListPageService {
    constructor(private http: HttpClient) { }

    public getDeviceDetails() {
        return this.http.get('http://localhost:3000/products');
    }

    public searchByDabId(dabId) {
        return this.http.get('http://localhost:3000/products/' + dabId);
    }
}