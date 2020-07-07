import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { User } from 'src/app/user/user';
import { FormData } from 'src/app/data/form-data.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: FormData;
  searchKey : any = '';
   orderKey : any = 'dsc';
  // @Output() getSelectedUserFromList : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  changeOrder(key) {
    this.orderKey = key;
  }

  // selectedUser= (user) =>{
  //   this.getSelectedUserFromList.emit(user);
  // }


}
