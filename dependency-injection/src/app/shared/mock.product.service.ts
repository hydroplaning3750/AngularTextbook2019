import { Product } from './Product';
import { BaseProductService } from './base.product.service';

export class MockProductService extends BaseProductService {
  getProduct(): Product {
    return new Product(0, "Samsung 7", 199.99, "The latest Samsung, 7-inch screen");
  }
}

