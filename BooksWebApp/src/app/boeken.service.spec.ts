import { TestBed } from '@angular/core/testing';

import { BoekenService } from './boeken.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('BoekenService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: [HttpClientModule,RouterModule,RouterTestingModule]

  }));

  it('should be created', () => {
    const service: BoekenService = TestBed.get(BoekenService);
    expect(service).toBeTruthy();
  });
});
