import { TestBed } from '@angular/core/testing';

import { AddinghrdetailsService } from './addinghrdetails.service';

describe('AddinghrdetailsService', () => {
  let service: AddinghrdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddinghrdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
