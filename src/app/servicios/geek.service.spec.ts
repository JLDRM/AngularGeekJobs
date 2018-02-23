import { TestBed, inject } from '@angular/core/testing';

import { GeekService } from './geek.service';

describe('GeekService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeekService]
    });
  });

  it('should be created', inject([GeekService], (service: GeekService) => {
    expect(service).toBeTruthy();
  }));
});
