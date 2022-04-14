import { TestBed } from '@angular/core/testing';

import { NotificaoService } from './notificao.service';

describe('NotificaoService', () => {
  let service: NotificaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
