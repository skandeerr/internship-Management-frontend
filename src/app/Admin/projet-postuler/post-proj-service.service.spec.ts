import { TestBed } from '@angular/core/testing';

import { PostProjServiceService } from './post-proj-service.service';

describe('PostProjServiceService', () => {
  let service: PostProjServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostProjServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
