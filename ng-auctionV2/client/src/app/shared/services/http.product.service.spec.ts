import { TestBed } from '@angular/core/testing';

import { Http.ProductService } from './http.product.service';

describe('Http.ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Http.ProductService = TestBed.get(Http.ProductService);
    expect(service).toBeTruthy();
  });
});
