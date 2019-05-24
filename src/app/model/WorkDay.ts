export class WorkDay {
  id: number;
  date: string;
  workStart: string;
  lunchStart: string;
  lunchEnd: string;
  workEnd: string;
  workedHours: number;
  events?: any[];
}
