import { TestBed } from '@angular/core/testing';

import { ChinchillasService } from './chinchillas.service';

describe('ChinchillasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChinchillasService = TestBed.get(ChinchillasService);
    expect(service).toBeTruthy();
  });
});
