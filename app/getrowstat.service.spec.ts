import { TestBed } from '@angular/core/testing';

import { GetrowstatService } from './getrowstat.service';

describe('GetrowstatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetrowstatService = TestBed.get(GetrowstatService);
    expect(service).toBeTruthy();
  });
});
