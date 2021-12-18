import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  selectedDate: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  pickedDate(date: Date){
    console.log(`picked date ${date}`);
    this.selectedDate = date;
  }

}
