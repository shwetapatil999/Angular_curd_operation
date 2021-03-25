import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  contactForm = new FormGroup({
    Name: new FormControl("", [this.NameValidator.bind(this)]),
    ContactNo: new FormControl("", [this.ContactValidator.bind(this)]),
    Email: new FormControl("", [this.EmailValidator.bind(this)])
  })

  NameValidator(formControl: FormControl) {
    if (!formControl.value) {
      return { 'error': 'Required.' }
    }
  }

  ContactValidator(formControl: FormControl) {
    if (!formControl.value) {
      return { 'error': 'Required.' }
    }

  }

  EmailValidator(formControl: FormControl) {
    if (!formControl.value) {
      return { 'error': 'Required.' }
    }

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
