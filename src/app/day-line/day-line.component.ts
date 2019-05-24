import { Component, OnInit, Input } from '@angular/core';
import { WorkDay } from '../model/WorkDay';

@Component({
  selector: 'app-day-line',
  templateUrl: './day-line.component.html',
  styleUrls: ['./day-line.component.css']
})
export class DayLineComponent implements OnInit {

  @Input() daysInLine: WorkDay;

  constructor() { }

  ngOnInit() {
    console.log(this.daysInLine);
  }

  addDayEvent(): void {
    console.log('test');
    this.daysInLine.events.push(new Date());
    console.log(this.daysInLine.events);
  }

  get canAddEvents(): boolean {
    return this.daysInLine.events.length < 3;
  }

  events(): any[] {
    return this.daysInLine.events;
  }

  deleteEvent(argument:any): void {
    //this.daysInLine.events.remove(argument);
  }

  canDeleteEvents(): boolean {
    return this.daysInLine.events.length >= 1;
  }

}
