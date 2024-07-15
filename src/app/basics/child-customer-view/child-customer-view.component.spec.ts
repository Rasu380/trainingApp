import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCustomerViewComponent } from './child-customer-view.component';

describe('ChildCustomerViewComponent', () => {
  let component: ChildCustomerViewComponent;
  let fixture: ComponentFixture<ChildCustomerViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildCustomerViewComponent]
    });
    fixture = TestBed.createComponent(ChildCustomerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
