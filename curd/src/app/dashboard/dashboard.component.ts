import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { contactApp } from '../in-memory-data.service';
import { ContactAppService} from './../contact-app.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private contactAppService: ContactAppService) { }

  conatctListOrignal: contactApp[];
  uiContactList: contactApp[];

// conatct list data gey in array
  ngOnInit(): void {
    this.contactAppService.getCustomers().subscribe((res:contactApp[]) => { 
      console.log(res);
      this.conatctListOrignal = res;
      this.uiContactList = this.conatctListOrignal;
    });
  }
  SearchChanges(val:string) {
    console.log(val);
    let filterlist = []; 
    if(val){
      this.conatctListOrignal.forEach(element => {
        // any case is matches then push in filter list
        if (
          element.name.toLowerCase().includes(val.toLowerCase()) ||
          element.contactNo.toLowerCase().includes(val.toLowerCase()) ||
          element.email.toLowerCase().includes(val.toLowerCase()) 
        )
        {
          filterlist.push(element);
         }
      });
      this.uiContactList = filterlist; //both are matches
    }
    else {
      this.uiContactList = this.conatctListOrignal;
    }
  }
}
