import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { PatientsLogComponent } from './pages/patients-log/patients-log.component';


@NgModule({
  declarations: [
    UsersComponent,
    CalendarComponent,
    PatientsLogComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }
