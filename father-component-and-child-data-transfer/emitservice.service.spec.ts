import { TestBed, inject } from '@angular/core/testing';

import { EmitserviceService } from './emitservice.service';

describe('EmitserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmitserviceService]
    });
  });

  it('should be created', inject([EmitserviceService], (service: EmitserviceService) => {
    expect(service).toBeTruthy();
  }));
});
