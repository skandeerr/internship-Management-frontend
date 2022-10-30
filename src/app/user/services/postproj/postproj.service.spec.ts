import { TestBed } from '@angular/core/testing';

import { PostprojService } from './postproj.service';

describe('PostprojService', () => {
  let service: PostprojService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostprojService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
