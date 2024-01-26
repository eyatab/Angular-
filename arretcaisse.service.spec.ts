import { TestBed } from '@angular/core/testing';

import { ArretcaisseService } from './arretcaisse.service';

describe('ArretcaisseService', () => {
  let service: ArretcaisseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArretcaisseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
