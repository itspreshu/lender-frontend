import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-calendar-datapicker',
  templateUrl: './calendar-datapicker.component.html',
  styleUrls: ['./calendar-datapicker.component.scss']
})
export class CalendarDatapickerComponent implements OnInit {
  public selected: Date = new Date();

  @Output()
  public datePicked: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() { }

  ngOnInit(): void {
  }

  onDateChanged() {
    this.datePicked.emit(this.selected);
  }

}
