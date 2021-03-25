import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { contactApp } from './in-memory-data.service';

@Injectable({
  providedIn: 'root'
})
export class ContactAppService {

  constructor(private HttpClient: HttpClient) { }
  
  getCustomers(): Observable<contactApp[]>{
    return this.HttpClient.get<contactApp[]>('api/contacts');
  }

  addCustomers(contactApp: contactApp){
    return this.HttpClient.post('api/contacts',contactApp);
  }

  UpdateCustomers(contactApp: contactApp) {
    return this.HttpClient.post('api/contacts', contactApp);
  }

  deleteCustomers(id: number) {
    return this.HttpClient.delete(`api/contacts/?${id}`);
  }

  getContactById(id: number): Observable<contactApp> {
    return this.HttpClient.get<contactApp>(`api/contacts/?${id}`);
  }
}
