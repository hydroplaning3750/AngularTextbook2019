import { TestBed } from '@angular/core/testing';

import { StaticProductService } from './static.product.service';

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticProductService = TestBed.get(StaticProductService);
    expect(service).toBeTruthy();
  });
});
