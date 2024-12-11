import { TestBed } from '@angular/core/testing';

import { FormCleanerService } from './form-cleaner.service';

describe('FormCleanerService', () => {
  let service: FormCleanerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormCleanerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
