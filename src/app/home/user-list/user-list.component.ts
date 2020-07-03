import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: User;
  // @Output() getSelectedUserFromList : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  // selectedUser= (user) =>{
  //   this.getSelectedUserFromList.emit(user);
  // }

}
