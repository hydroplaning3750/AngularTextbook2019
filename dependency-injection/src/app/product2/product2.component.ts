import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/Product';
import { BaseProductService } from '../shared/base.product.service';
import { MockProductService } from '../shared/mock.product.service';
import { productServiceFactory } from '../shared/product.factory';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  //Overrides modular-level DI
  //providers: [{ provide: BaseProductService, useClass: MockProductService}]
  providers: [
    { 
      provide: BaseProductService, 
      useFactory: productServiceFactory,  //Resolves DI mapping by factory method
      deps:['IS_PROD_ENVIRONMENT']  //Additional dependencies to be injected into the resolved dependency (session bool in this case)
    },
    { provide: 'IS_PROD_ENVIRONMENT', useValue: environment.production }  //Assign value to injected dependency
  ]
})
export class Product2Component implements OnInit {
  public product: Product;

  constructor(private _productService: BaseProductService) { 
    this.product = _productService.getProduct();
  }

  ngOnInit() {
  }

}
