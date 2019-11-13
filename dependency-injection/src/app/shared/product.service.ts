import { BaseProductService } from './base.product.service';
import { Product } from './Product';

export class RealProductService extends BaseProductService {
    getProduct() : Product {
        return new Product(0, "iPhone 7", 249.99, "The latest iPhone, 7-inch screen");
    }
}