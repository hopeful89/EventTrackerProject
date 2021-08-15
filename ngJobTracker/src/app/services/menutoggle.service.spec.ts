import { TestBed } from '@angular/core/testing';

import { MenutoggleService } from './menutoggle.service';

describe('MenutoggleService', () => {
  let service: MenutoggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenutoggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
