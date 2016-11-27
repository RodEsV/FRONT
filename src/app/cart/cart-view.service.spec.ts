/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CartViewService } from './cart-view.service';

describe('Service: CartView', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartViewService]
    });
  });

  it('should ...', inject([CartViewService], (service: CartViewService) => {
    expect(service).toBeTruthy();
  }));
});
