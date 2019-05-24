import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthWorklogComponent } from './month-worklog.component';

describe('MonthWorklogComponent', () => {
  let component: MonthWorklogComponent;
  let fixture: ComponentFixture<MonthWorklogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthWorklogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthWorklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
