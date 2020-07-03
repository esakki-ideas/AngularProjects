import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-info',
  templateUrl: './skill-info.component.html',
  styleUrls: ['./skill-info.component.scss']
})
export class SkillInfoComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToNext(form :NgForm) {
    console.log('wefda');
    this.route.navigate(['work']);
  }

  goToPrevious(form :NgForm){
    this.route.navigate(['info']);
  }

}
