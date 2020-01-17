import { Component } from '@angular/core';
import { IProduct } from '../shared/interfaces/product';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { BaseProductService } from '../shared/services/base.product.service';

@Component({
  selector: 'nga-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public product$: Observable<IProduct>;
  public suggestedProducts$: Observable<IProduct[]>;

  constructor(private _route: ActivatedRoute,
    private _productService: BaseProductService) {
      this.product$ = _route.paramMap
        .pipe(
          //Gets the productId from the ActivatedRoute's param map
          map(params => parseInt(params.get('productId') || '', 10)),
          //Ensure that product ID is a valid number
          //!! - referred to as 'double-bang' - returns the boolean true/false association of a value (null check)
          //All values are considered 'truthy' in JS unless they are equivalent to a defined 'falsey' value
          //  - falsey values = false, 0, empty string, null, undefined, and NaN
          //  - ex: !null = false
          filter(productId => !!productId),
          //Switches to the observable that retrieves details for the specified product
          switchMap(productId => _productService.getProductById(productId))
        );
      
      this.suggestedProducts$ = this._productService.getAllProducts();
     }
}