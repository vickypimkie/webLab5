import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
    export class BackendService {
    constructor(
        private http: HttpClient) { }

    public getMenu(): Observable < Model.Menu[] > {
        return  this.http.get('../../assets/menu.json')
        .map((data) => {
            const response = data['menus'] as Array<any>;
            const result = [];
            const l = response.length;
            for ( let i = 0; i < l; i += 1 ) {
            const crs = response[i];
            result.push({
            id: crs.id,
            name: crs['Name'],
            } as Model.Menu);
         }
        return result;
    });
}
}
