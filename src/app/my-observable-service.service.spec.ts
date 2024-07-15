import { TestBed } from '@angular/core/testing';

import { MyObservableServiceService } from './my-observable-service.service';

describe('MyObservableServiceService', () => {
  let service: MyObservableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyObservableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
