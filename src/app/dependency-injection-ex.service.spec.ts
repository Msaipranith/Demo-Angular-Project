import { TestBed } from '@angular/core/testing';

import { DependencyInjectionExService } from './dependency-injection-ex.service';

describe('DependencyInjectionExService', () => {
  let service: DependencyInjectionExService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependencyInjectionExService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
