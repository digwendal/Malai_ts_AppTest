import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragLockTestComponent } from './drag-lock-test.component';

describe('DragLockTestComponent', () => {
  let component: DragLockTestComponent;
  let fixture: ComponentFixture<DragLockTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragLockTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragLockTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
