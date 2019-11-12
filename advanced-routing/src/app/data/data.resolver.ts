import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataResolver implements Resolve<string[]> {
    constructor(private _httpClient: HttpClient) { }

    resolve() : Observable<string[]> {
        return this._httpClient.get<string[]>("./assets/48MB_DATA.json");
    }    
}