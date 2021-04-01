import { TestBed } from '@angular/core/testing';

import { EdithrdetailsserviceService } from './edithrdetailsservice.service';

describe('EdithrdetailsserviceService', () => {
  let service: EdithrdetailsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdithrdetailsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
