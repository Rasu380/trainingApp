import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildHooksComponent } from './child-hooks.component';

describe('ChildHooksComponent', () => {
  let component: ChildHooksComponent;
  let fixture: ComponentFixture<ChildHooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildHooksComponent]
    });
    fixture = TestBed.createComponent(ChildHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
