import { TestBed, inject } from '@angular/core/testing';

import { DutyService } from './duty.service';

describe('DutyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DutyService]
    });
  });

  it('should be created', inject([DutyService], (service: DutyService) => {
    expect(service).toBeTruthy();
  }));
});
