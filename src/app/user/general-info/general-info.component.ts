import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from 'src/app/data/form-data.service';
import { GeneralInfo } from './gernal-info.model';
// import * as $ from 'jquery';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  contactInfo : GeneralInfo = new GeneralInfo();
  constructor(private route: Router, private formDataService : FormDataService) { }

  ngOnInit(): void {
    this.contactInfo = this.formDataService.getGeneralInfo();
  }
  
  

  goToPrevious(){
    this.route.navigate(['users']);
  }

//   phoneMask() { 
//     var num = $(this).val().replax(/\D/g,''); 
//     $(this).val(num.substring(0,1) + '(' + num.substring(1,4) + ')' + num.substring(4,7) + '-' + num.substring(7,11)); 
// }
// $('[type="tel"]').keyup(phoneMask);

contactInfoForm = new FormGroup({
  email : new FormControl('', [Validators.required]),
  phone : new FormControl(''),
  socialInfo : new FormControl('')
});

goToNext() {
  console.log('wefda ', this.contactInfoForm);
  this.formDataService.setGeneralInfo(this.contactInfo);
  this.route.navigate(['skill']);
}

}
