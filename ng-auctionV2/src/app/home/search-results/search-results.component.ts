import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/shared/services';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'nga-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  readonly products$: Observable<IProduct[]>;

  constructor(private _productService: ProductService,
    private _route: ActivatedRoute) {
      this.products$ = this._route.queryParams.pipe(
        switchMap(queryParams => this._productService.search(queryParams))
      );
  }
}
