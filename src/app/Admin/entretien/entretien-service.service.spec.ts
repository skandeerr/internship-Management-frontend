import { TestBed } from '@angular/core/testing';

import { EntretienServiceService } from './entretien-service.service';

describe('EntretienServiceService', () => {
  let service: EntretienServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntretienServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
