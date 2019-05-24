import { Component, OnInit, Input } from '@angular/core';
import { WorkDay } from '../model/WorkDay';


@Component({
  selector: 'app-month-worklog',
  templateUrl: './month-worklog.component.html',
  styleUrls: ['./month-worklog.component.css']
})
export class MonthWorklogComponent implements OnInit {

  @Input() daysInMonth: WorkDay[];
  displayedColumns: string[] = ['Datum', 'Prichod', 'Obed od',
    'Obed do', 'Odchod', 'Opdracovano', 'Vykaz', 'Udalosti'];

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
