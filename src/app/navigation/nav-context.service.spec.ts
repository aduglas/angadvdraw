import { TestBed } from '@angular/core/testing';

import { NavContextService } from './nav-context.service';

describe('NavContextService', () => {
  let service: NavContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
