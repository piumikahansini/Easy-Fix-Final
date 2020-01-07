import { TestBed } from '@angular/core/testing';

import { UsercookieService } from './usercookie.service';

describe('UsercookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsercookieService = TestBed.get(UsercookieService);
    expect(service).toBeTruthy();
  });
});
