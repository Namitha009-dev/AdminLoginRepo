import { TestBed } from '@angular/core/testing';

import { SearchAssociateDetailsService } from './search-associate-details.service';

describe('SearchAssociateDetailsService', () => {
  let service: SearchAssociateDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAssociateDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
