import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserForExport(): User[] {
    return [
      {
        name: 'Adam Sangala'
      },
      {
        name: 'Jozef Mak'
      }
    ];
  }
}
