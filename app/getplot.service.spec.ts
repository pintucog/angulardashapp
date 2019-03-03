import { TestBed } from '@angular/core/testing';

import { GetplotService } from './getplot.service';

describe('GetplotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetplotService = TestBed.get(GetplotService);
    expect(service).toBeTruthy();
  });
});
