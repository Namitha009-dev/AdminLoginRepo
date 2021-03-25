import { TestBed } from '@angular/core/testing';

import { SkilltrackerService } from './skilltracker.service';

describe('SkilltrackerService', () => {
  let service: SkilltrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkilltrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
