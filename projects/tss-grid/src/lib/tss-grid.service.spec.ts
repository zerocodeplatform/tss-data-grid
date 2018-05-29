import { TestBed, inject } from '@angular/core/testing';

import { TssGridService } from './tss-grid.service';

describe('TssGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TssGridService]
    });
  });

  it('should be created', inject([TssGridService], (service: TssGridService) => {
    expect(service).toBeTruthy();
  }));
});
