import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCustomerAddComponent } from './child-customer-add.component';

describe('ChildCustomerAddComponent', () => {
  let component: ChildCustomerAddComponent;
  let fixture: ComponentFixture<ChildCustomerAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildCustomerAddComponent]
    });
    fixture = TestBed.createComponent(ChildCustomerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
