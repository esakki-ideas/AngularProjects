import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
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
  email : new FormControl(''),
  phone : new FormControl(''),
  socialInfo : new FormControl('')
});

goToNext() {
  console.log('wefda ', this.contactInfoForm);
  this.route.navigate(['skill']);
}

}
