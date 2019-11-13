import { BaseProductService } from './base.product.service';
import { RealProductService } from './product.service';
import { MockProductService } from './mock.product.service';

export function productServiceFactory(isProd: boolean) : BaseProductService {
    return (isProd)
        ? new RealProductService()
        : new MockProductService();
}