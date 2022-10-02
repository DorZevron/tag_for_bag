/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QrCodeApiService } from './qrCodeApi.service';

describe('Service: QrCodeApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QrCodeApiService]
    });
  });

  it('should ...', inject([QrCodeApiService], (service: QrCodeApiService) => {
    expect(service).toBeTruthy();
  }));
});
