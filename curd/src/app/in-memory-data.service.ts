import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const contacts = [
      new contactApp(1, "Dipak", "9494999494", "dip@gmail.com"),
      new contactApp(2, "Pranjal", "9494999495", "pran@gmail.com"),
      new contactApp(3, "Nikhil", "9494999496", "nik@gmail.com"),
      new contactApp(4, "Shivaji", "9494999497", "shiv@gmail.com"),
      
    ];
    return { contacts };
  }
  // Overrides the genId method to ensure that a conatct always has an id.
  // If the contactApp array is empty,
  // the method below returns the initial number (1).
  // if the conatcts array is not empty, the method below returns the highest
  // contactApp id + 1.
  //... spread opearor is used

  // The logic for add record after 4 record
  genId(contacts: contactApp[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contacts => contacts.id)) + 1 : 1;
  }
}
export class contactApp {
  id: number;
  name: string;
  contactNo: string
  email : string

  constructor(id: number, name: string, contactNo: string, email: string) {
    this.id = id;
    this.name = name;
    this.contactNo = contactNo;
    this.email = email;
  }
}