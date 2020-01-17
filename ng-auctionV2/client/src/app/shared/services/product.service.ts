import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';
import { map, tap } from 'rxjs/operators';
import { IProductSearchParams } from '../interfaces/IProductSearchParams';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>('/data/products.json');
  }

  getById(id: number): Observable<IProduct> {
    return this.getAllProducts().pipe(
      map(products => products.find(p => p.id == id))
    );
  }

  getByCategory(category: string): Observable<IProduct[]> {
    return this.getAllProducts().pipe(
      map(products => products.filter(p => p.categories.includes(category)))
    );
  }

  /**
   *  Return distinct category names
   *  First select all categories and then create a set with unique category names
   *  We use the lettable tap() operator to illustrate debugging of observable
   *
   *  See https://github.com/ReactiveX/rxjs/blob/master/doc/lettable-operators.md
   */
  getDistinctCategories(): Observable<string[]> {
    return this._http.get<IProduct[]>('/data/products.json')
      .pipe(
        tap(value => console.log('Before reducing categories', JSON.stringify(value[0]['categories']))),
        map(this.reduceCategories),
        tap(value => console.log(`After reducing categories ${value}`)),
        map(categories => Array.from(new Set(categories))),
        tap(value => console.log(`After creating categories array ${value}`))
      );
  }

  search(params: IProductSearchParams): Observable<IProduct[]> {
    return this.getAllProducts().pipe(
      map(products => products.filter(p => this.filterProducts(products, params)))
    );
  }

  // Populate an array with categories values of each product
  private reduceCategories(products: IProduct[]): string[] {
    return products.reduce((all, product) => all.concat(product.categories), new Array<string>());
  }

  private filterProducts(products: IProduct[], params: IProductSearchParams): IProduct[] {
    return products
      .filter(p => (params.productTitle) ? p.title.toLowerCase().includes((<string>params.productTitle).toLowerCase()) : products)
      .filter(p => (params.minPrice) ? p.price > params.minPrice : products)
      .filter(p => (params.maxPrice) ? p.price < params.maxPrice : products);
  }
}
