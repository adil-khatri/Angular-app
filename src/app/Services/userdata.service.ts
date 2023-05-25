import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return [
      {
        name: 'Adil Khatri',
        email: 'adil@gmail.com',
        designation: "Software Developer"
      },
      {
        name: 'John',
        email: 'john@gmail.com',
        designation: "Mobile App Developer"
      },
      {
        name: 'Virat',
        email: 'virat@gmail.com',
        designation: "Business Analyst"
      },
      {
        name: 'Speed',
        email: 'speed@gmail.com',
        designation: "Data Analyst"
      }
    ]
  }
}
