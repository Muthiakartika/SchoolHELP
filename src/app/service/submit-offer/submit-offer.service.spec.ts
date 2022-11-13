import { TestBed } from '@angular/core/testing';

import { SubmitOfferService } from './submit-offer.service';

describe('SubmitOfferService', () => {
  let service: SubmitOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
