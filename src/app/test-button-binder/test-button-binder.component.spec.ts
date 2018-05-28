import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestButtonBinderComponent } from './test-button-binder.component';

describe('TestButtonBinderComponent', () => {
  let component: TestButtonBinderComponent;
  let fixture: ComponentFixture<TestButtonBinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestButtonBinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestButtonBinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
