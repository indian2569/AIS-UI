import { Component, OnInit } from '@angular/core';
import { WorkDay } from '../model/WorkDay';
import { DaysService } from '../services/days.service';
import { User } from '../model/User';
import { UserService } from '../services/user.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

   days: WorkDay[];
   users: User[];

  constructor(private daysService: DaysService,
              private userService: UserService) { }

  ngOnInit() {
     this.getDaysOfTheMonth();
     this.getUserForExport();
  }

  getDaysOfTheMonth(): void {
    this.days = this.daysService.getDaysOfTheMonth(new Date());
  }

  getUserForExport(): void {
    this.users = this.userService.getUserForExport();
  }

}
