import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { User } from 'src/app/user/user';
import { Router } from '@angular/router';
import { FormDataService } from 'src/app/data/form-data.service';
import { FormData } from 'src/app/data/form-data.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  formData : FormDataService;
  @Input() user: FormData;
  // @Output() getSelecteduserFromCard : EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private formDataService : FormDataService ) { }

  ngOnInit(): void {
  }

  selectedUser = (user) => {
    // this.getSelecteduserFromCard.emit(user);
    this.formDataService.setFormData(user);
    this.router.navigate(['detail']);
  }

  editUser = (user) => {
    this.formDataService.setFormData(user);
    this.router.navigate(['users']);
  }

}
