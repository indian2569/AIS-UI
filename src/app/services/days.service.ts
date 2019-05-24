import { Injectable } from '@angular/core';
import { WorkDay } from '../model/WorkDay';

@Injectable({
  providedIn: 'root'
})
export class DaysService {
  dayOfMonth: number;

  constructor() { }

  getDaysOfTheMonth(arg0: Date): WorkDay[] {

    return  [
      {
        id: 282,
        date: '2017-07-21',
        workStart: '2017-07-21T06:30:00Z',
        lunchStart: '2017-07-21T12:00:00Z',
        lunchEnd: '2017-07-21T12:30:00Z',
        workEnd: '2017-07-21T15:30:00Z',
        workedHours: 7.5,
        events: []
      },
      {
        id: 283,
        date: '2017-07-22',
        workStart: '2017-07-22T06:30:00Z',
        lunchStart: '2017-07-22T12:00:00Z',
        lunchEnd: '2017-07-22T12:30:00Z',
        workEnd: '2017-07-22T15:30:00Z',
        workedHours: 7.5,
        events: []
      }
    ];
  }

  getDates(startDate: Date, stopDate: Date) {
    var dateArray = [];
    Date currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(currentDate);
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
  }
  
}
