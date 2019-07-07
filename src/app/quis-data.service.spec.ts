import { TestBed } from '@angular/core/testing';

import { QuisDataService } from './quis-data.service';

describe('QuisDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuisDataService = TestBed.get(QuisDataService);
    expect(service).toBeTruthy();
  });
});
