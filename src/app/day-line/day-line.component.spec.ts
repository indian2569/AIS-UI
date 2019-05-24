import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayLineComponent } from './day-line.component';

describe('DayLineComponent', () => {
  let component: DayLineComponent;
  let fixture: ComponentFixture<DayLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
