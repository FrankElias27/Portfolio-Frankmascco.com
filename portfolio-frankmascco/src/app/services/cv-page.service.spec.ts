import { TestBed } from '@angular/core/testing';

import { CvPageService } from './cv-page.service';

describe('CvPageService', () => {
  let service: CvPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
