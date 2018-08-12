import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ProductResolver implements Resolve<Observable<any>> {
    constructor(public http: HttpClient) {}
    resolve(
        route: ActivatedRouteSnapshot
    ): Observable<any>|Promise<any>|any {
        return this.getProduct(route.paramMap.get('id'));
    }

    public getProduct(id) {
        let url = 'http://localhost:3000/products/' + atob(id);
        return this.http.get(url);
    }
}
