import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

interface IProduct {
  id: string;
  title: string;
  price: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'read-file';
  products$: Observable<IProduct[]>;

  constructor(private _httpClient: HttpClient) {
    this.products$ = _httpClient.get<IProduct[]>('../src/data/products.json');
  }
}
