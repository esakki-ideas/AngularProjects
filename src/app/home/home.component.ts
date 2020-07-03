import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userList: User[] = [{
    id: 1,
    name: 'Esakki Muthu'
  },
  {
    id: 2,
    name: 'Jhon Cena'
  },
  {
    id: 3,
    name: 'Sachin Tendulkar'
  },
  {
    id: 4,
    name: 'Rahul Dravid'
  }]


  // selectedUserFromList = (selectedUser) =>{
    
  //   console.log(selectedUser);

  // }

}
