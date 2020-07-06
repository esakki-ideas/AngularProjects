import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import * as moment from 'moment';
import { User } from './user.model';
import { FormDataService } from '../data/form-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(private route: Router, private formDataService : FormDataService) {}

  userInfo : User = new User();
  // fullName: String;
  // age: Number;
  // dob :String;
  ngOnInit(): void {
    this.userInfo = this.formDataService.getUserInfo();
  }

  goToNext(form: NgForm) {
    console.log('form data', form);
    console.log('form userInfo', this.userInfo);
    this.formDataService.setUserInfo(this.userInfo);
    this.route.navigate(['info']);
  }

  generateFullName(form: NgForm) {
    console.log(form.value);
    form.value.fullName = this.userInfo.fullName = form.value.firstName + ' ' + form.value.lastName
    
  }

  generateAge(form : NgForm) {
   const dob = moment(new Date(form.value.dateOfBirth), 'YYYY-MM-DD');
   var diffDays = moment().diff(dob, 'days');
   this.userInfo.age = Math.floor(diffDays/365);
   console.log(this.userInfo.age, diffDays);
  }

  alphabetsOnly(event: KeyboardEvent) {
    const pattern = /[A-Za-z]/;
    const inputChar = event.key;
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }

  }

  dateCheck() {
       // @ts-ignore
  <any>$('#dateOfBirth').datepicker({
    // format: 'YYYY-MM-DD',
    useCurrent: false,
    showClose: true,
    minDate: '2018-02-01',
    maxDate: '2010-03-15',
})
  }



}
