import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { User } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user:User;
  // @Output() getSelecteduserFromCard : EventEmitter<any> = new EventEmitter();
  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  selectedUser = (user) => {
    // this.getSelecteduserFromCard.emit(user);
    this.router.navigate(['users']);
  }

}
