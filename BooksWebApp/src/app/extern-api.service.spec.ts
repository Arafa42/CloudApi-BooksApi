import { TestBed } from '@angular/core/testing';

import { ExternApiService } from './extern-api.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';

describe('ExternApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: [HttpClientTestingModule,BrowserModule]

  }));

  it('should be created', () => {
    const service: ExternApiService = TestBed.get(ExternApiService);
    expect(service).toBeTruthy();
  });
});
