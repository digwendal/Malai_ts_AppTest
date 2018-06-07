import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateChoiceComponent } from './date-choice.component';

describe('DateChoiceComponent', () => {
  let component: DateChoiceComponent;
  let fixture: ComponentFixture<DateChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
