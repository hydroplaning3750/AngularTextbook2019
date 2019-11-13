import { TestBed } from '@angular/core/testing';

import { RealProductService } from '../shared/product.service';

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealProductService = TestBed.get(RealProductService);
    expect(service).toBeTruthy();
  });
});
