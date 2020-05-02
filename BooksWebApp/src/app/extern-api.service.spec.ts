import { TestBed } from '@angular/core/testing';

import { ExternApiService } from './extern-api.service';

describe('ExternApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternApiService = TestBed.get(ExternApiService);
    expect(service).toBeTruthy();
  });
});
