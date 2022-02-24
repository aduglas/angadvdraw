import { TestBed } from '@angular/core/testing';

import { ContrainteNavigationGuard } from './contrainte-navigation.guard';

describe('ContrainteNavigationGuard', () => {
  let guard: ContrainteNavigationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ContrainteNavigationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
