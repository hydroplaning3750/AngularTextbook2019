import { TestBed } from '@angular/core/testing';

import { SsnValidatorService } from './ssn-validator.service';

describe('SsnValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SsnValidatorService = TestBed.get(SsnValidatorService);
    expect(service).toBeTruthy();
  });
});
