import { TestBed } from '@angular/core/testing';

import { IChingDivinationLogicService } from './i-ching-divination-logic.service';

describe('IChingDivinationLogicService', () => {
  let service: IChingDivinationLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IChingDivinationLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
