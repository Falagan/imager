import { TestBed } from '@angular/core/testing';

import { UnSplashRepository } from './unsplash.repository';

describe('UnSplashRepository', () => {
  let service: UnSplashRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnSplashRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
