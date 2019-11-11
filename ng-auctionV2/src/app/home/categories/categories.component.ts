import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services';

@Component({
  selector: 'nga-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {
  readonly categoryNames$: Observable<string[]>;
  readonly products$: Observable<IProduct[]>;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute) { 
      this.categoryNames$ = this._productService.getDistinctCategories().pipe(
        map(categories => ['all', ...categories])
      );
  
      this.products$ = this._route.params.pipe(
        switchMap(({ category }) => this.getCategory(category))
      );
  }

  private getCategory(category: string): Observable<IProduct[]> {
    return category.toLowerCase() === 'all'
      ? this._productService.getAllProducts()
      : this._productService.getByCategory(category.toLowerCase());
  }
}
