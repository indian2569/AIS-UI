import { Component, OnInit, Input } from '@angular/core';
import { WorkDay } from '../model/WorkDay';


@Component({
  selector: 'app-month-worklog',
  templateUrl: './month-worklog.component.html',
  styleUrls: ['./month-worklog.component.css']
})
export class MonthWorklogComponent implements OnInit {

  @Input() daysInMonth: WorkDay[];
  displayedColumns: string[] = ['Den', 'Prichod do prace', 'Odchod na Obed',
   'Prichod z Obeda', 'Odchod z prace', 'Pracovny fond', 'Odracovane hodiny','Eventy'] ;

  constructor() { }

  ngOnInit() {
  }

  get expectedHours(): number {
    return 8;
  }

  getHours(stringDate: string): Date {
    return new Date(stringDate);
  }

  getDateForSelection() {
    return 5;
  }
}
