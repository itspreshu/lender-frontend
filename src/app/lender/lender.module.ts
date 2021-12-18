import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LenderRoutingModule } from './lender-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendarDatapickerComponent } from './components/calendar-datapicker/calendar-datapicker.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule} from "@angular/material/core";
import { DateEditorComponent } from './components/date-editor/date-editor.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { PatientsPendingComponent } from './pages/patients-pending/patients-pending.component';
import { PatientDetailComponent } from './pages/patient-detail/patient-detail.component';
import { PatientListItemComponent } from './components/patient-list-item/patient-list-item.component';


@NgModule({
  declarations: [
    HomeComponent,
    CalendarComponent,
    CalendarDatapickerComponent,
    DateEditorComponent,
    PatientsPendingComponent,
    PatientDetailComponent,
    PatientListItemComponent
  ],
  imports: [
    CommonModule,
    LenderRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class LenderModule { }
