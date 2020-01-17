import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { IProduct } from '../shared/interfaces/product';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly columns$: Observable<number>;
  readonly products$: Observable<IProduct[]>;

  private readonly _breakpointsToColumnsNumber = new Map([
    [ 'xs', 1 ],
    [ 'sm', 2 ],
    [ 'md', 3 ],
    [ 'lg', 4 ],
    [ 'xl', 5 ]
  ]);

  constructor(private _productService: ProductService, private _mediaObserver: MediaObserver) { 
    this.products$ = this._productService.getAllProducts();

    this.columns$ = this._mediaObserver.asObservable()
      .pipe(
        map((mc: MediaChange[]) => <number>this._breakpointsToColumnsNumber.get(mc[0].mqAlias))
      );
  }
}
