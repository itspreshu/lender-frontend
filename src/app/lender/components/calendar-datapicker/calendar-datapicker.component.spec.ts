import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDatapickerComponent } from './calendar-datapicker.component';

describe('CalendarDatapickerComponent', () => {
  let component: CalendarDatapickerComponent;
  let fixture: ComponentFixture<CalendarDatapickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarDatapickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDatapickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
