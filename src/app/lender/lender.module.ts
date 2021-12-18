import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LenderRoutingModule } from './lender-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendarDatapickerComponent } from './components/calendar-datapicker/calendar-datapicker.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations: [
    HomeComponent,
    CalendarComponent,
    CalendarDatapickerComponent
  ],
  imports: [
    CommonModule,
    LenderRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class LenderModule { }
