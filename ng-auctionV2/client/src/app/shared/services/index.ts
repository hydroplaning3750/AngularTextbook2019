import { BaseProductService } from './base.product.service';
import { HttpProductService } from './http.product.service';

export { StaticProductService as ProductService } from './static.product.service';

export const SHARED_SERVICES = [
  // StaticProductService
  { provide: BaseProductService, useClass: HttpProductService }
];