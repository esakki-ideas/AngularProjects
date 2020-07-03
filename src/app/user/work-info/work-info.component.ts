import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-work-info',
  templateUrl: './work-info.component.html',
  styleUrls: ['./work-info.component.scss']
})
export class WorkInfoComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(private route: Router) { }

  submitFormData(form :NgForm) {
    console.log('form data' , form);
    this.route.navigate(['home']);
  }

  goToPrevious(form :NgForm){
    this.route.navigate(['skill']);
  }

}
