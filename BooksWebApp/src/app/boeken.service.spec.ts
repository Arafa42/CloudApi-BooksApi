import { TestBed } from '@angular/core/testing';

import { BoekenService } from './boeken.service';

describe('BoekenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoekenService = TestBed.get(BoekenService);
    expect(service).toBeTruthy();
  });
});
