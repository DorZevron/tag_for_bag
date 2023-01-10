/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InternationalizeService } from './internationalize.service';

describe('Service: Internationalize', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternationalizeService]
    });
  });

  it('should ...', inject([InternationalizeService], (service: InternationalizeService) => {
    expect(service).toBeTruthy();
  }));
});
