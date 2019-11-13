import { Component, OnInit } from '@angular/core';
import { BaseProductService } from '../shared/base.product.service';
import { Product } from '../shared/Product';
import { RealProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [RealProductService] //Dependency Injection in Component
})
export class ProductComponent implements OnInit {
  public product: Product;

  constructor(private _productService: BaseProductService) {
    this.product = _productService.getProduct();
   }

  ngOnInit() {
  }

}
