import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from 'src/app/app.tokens';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';
import { IProductSearchParams } from '../interfaces/IProductSearchParams';
import { BaseProductService } from './base.product.service';

@Injectable({
  providedIn: 'root'
})
export class HttpProductService implements BaseProductService {
  constructor(
    @Inject(API_BASE_URL) private _baseUrl: string,
    private _httpClient: HttpClient
  ) { }

  getAllProducts() : Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(`${this._baseUrl}/api/products`);
  }

  getProductById(id: number) : Observable<IProduct> {
    return this._httpClient.get<IProduct>(`${this._baseUrl}/api/products/${id}`);
  }
  
  getProductsByCategory(category: string) : Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(`${this._baseUrl}/api/categories/${category}`);
  }

  getAllCategories() : Observable<string[]> {
    return this._httpClient.get<string[]>(`${this._baseUrl}/api/categories`);
  }
  
  search(params: IProductSearchParams): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(`${this._baseUrl}/api/products`, { params });
  }
}
