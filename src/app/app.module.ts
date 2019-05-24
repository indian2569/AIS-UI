import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayLineComponent } from './day-line/day-line.component';
import { MonthWorklogComponent } from './month-worklog/month-worklog.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayLineComponent,
    MonthWorklogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
