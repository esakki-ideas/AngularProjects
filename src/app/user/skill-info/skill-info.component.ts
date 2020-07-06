import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Skills } from './skill-info.model';
import { FormDataService } from 'src/app/data/form-data.service';

@Component({
  selector: 'app-skill-info',
  templateUrl: './skill-info.component.html',
  styleUrls: ['./skill-info.component.scss']
})
export class SkillInfoComponent implements OnInit {

  
  constructor(private route: Router, private formDataService:FormDataService) { }

  skills: Skills[];
  ngOnInit(): void {
    this.skills = this.formDataService.getSkillInfo();
  }

  goToNext(form: NgForm) {
    console.log('wefda', form.value);
    console.log('wefda', this.skills);
    this.formDataService.setSkillInfo(this.skills);
    this.route.navigate(['work']);
  }

  addRow() {
    this.skills.push({
      id: this.skills.length+1,
      skillInfo: '',
      rate: 0
    });
  }

  goToPrevious(form: NgForm) {
    this.route.navigate(['info']);
  }

}
