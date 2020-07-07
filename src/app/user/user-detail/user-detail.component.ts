import { Component, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/data/form-data.service';
import { FormData } from 'src/app/data/form-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  formData : FormData
  constructor(private formDataServices: FormDataService, public router: Router) { }

  ngOnInit(): void {
    this.formData = this.formDataServices.getFormData();
  }

  phoneNumberChange(phone : Number) {
    this.formData.phone = phone;
  }

}
