import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { Work } from './work-info.model';
import { FormDataService } from 'src/app/data/form-data.service';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-work-info',
  templateUrl: './work-info.component.html',
  styleUrls: ['./work-info.component.scss']
})


export class WorkInfoComponent implements OnInit {

  workInfo: Work;
  ngOnInit(): void {
    this.workInfo = this.formDataService.getWorkInfo();
  }

  constructor(private route: Router, private formDataService : FormDataService) { }

  submitFormData(form :NgForm) {
    console.log('form data' , form.value);
    this.formDataService.setWorkInfo(this.workInfo);
    this.route.navigate(['detail']);
  }

  goToPrevious(form :NgForm){
    this.formDataService.setWorkInfo(this.workInfo);
    this.route.navigate(['skill']);
  }



  generateExperience(form : NgForm) {
    const fromDate = moment(new Date(form.value.fromDate), 'YYYY-MM-DD');
    var diffDays = moment(new Date(form.value.toDate), 'YYYY-MM-DD').diff(fromDate, 'days');
    this.workInfo.experience = parseFloat((Math.abs(diffDays/365)).toFixed(1));
    console.log(this.workInfo.experience, diffDays);
   }

}
