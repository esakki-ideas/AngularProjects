import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { FormData } from 'src/app/data/form-data.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.pageData= this.userList.slice(0,4);
  }

  pageData: FormData[];
  pageClickedHome(event){
    console.log(event);
    this.pageData = event.data[event.index];
     }
   
  userList: FormData[] = [{
    id: 1,
    firstName: 'Esakki',
    lastName : 'Muthu',
    fullName : 'Esakki Muthu' ,
    dateOfBirth: new Date(), 
    age: 26 ,
    email:  'esakki.muthu946@gmail.com',
    country:  'India',
    city:  'Chennai',
    socialInfo:  'https://esakki/Angular',
    skills: [{id:1,skillInfo: 'Angular',
                            rate: 6},
                            {id:2,skillInfo: 'Java',
                            rate: 8},
                            {id:3,skillInfo: 'AWS',
                            rate: 6}],
    companyName:  'Ideas@it',
    fromDate:  '01-06-2019',
    toDate:  '01-07-2020',
    role:  'Software Engineer',
    experience:  1,
    phone:  9176145127,
  },
  {
    id: 2,
    firstName: 'Jhon',
    lastName : 'Cena',
    fullName : 'Jhon Cena' ,
    dateOfBirth: new Date(), 
    age: 26,
    email:  'esakki.muthu946@gmail.com',
    country:  'India',
    city:  'Chennai',
    socialInfo:  'https://esakki/Angular',
    skills: [{id:1,skillInfo: 'Angular',
                            rate: 6},
                            {id:2,skillInfo: 'Java',
                            rate: 8},
                            {id:3,skillInfo: 'AWS',
                            rate: 6}],
    companyName:  'Ideas@it',
    fromDate:  '01-06-2019',
    toDate:  '01-07-2020',
    role:  'Software Engineer',
    experience:  1,
    phone:  9176145127
  },
  {
    id: 3,
    fullName: 'Sachin Tendulkar',
    firstName: 'Sachin',
    lastName : 'Tendulkar',
    dateOfBirth: new Date(), 
    age: 26 ,
    email:  'esakki.muthu946@gmail.com',
    country:  'India',
    city:  'Chennai',
    socialInfo:  'https://esakki/Angular',
    skills: [{id:1,skillInfo: 'Angular',
                            rate: 6},
                            {id:2,skillInfo: 'Java',
                            rate: 8},
                            {id:3,skillInfo: 'AWS',
                            rate: 6}],
    companyName:  'Ideas@it',
    fromDate:  '01-06-2019',
    toDate:  '01-07-2020',
    role:  'Software Engineer',
    experience:  1,
    phone:  9176145127
  },
  {
    id: 4,
    fullName: 'Rahul Dravid',
    firstName: 'Rahul',
    lastName : 'Dravid',
    dateOfBirth: new Date(), 
    age: 26,
    email:  'esakki.muthu946@gmail.com',
    country:  'India',
    city:  'Chennai',
    socialInfo:  'https://esakki/Angular',
    skills: [{id:1,skillInfo: 'Angular',
                            rate: 6},
                            {id:2,skillInfo: 'Java',
                            rate: 8},
                            {id:3,skillInfo: 'AWS',
                            rate: 6}],
    companyName:  'Ideas@it',
    fromDate:  '01-06-2019',
    toDate:  '01-07-2020',
    role:  'Software Engineer',
    experience:  1,
    phone:  9176145127
  },{
    id: 5,
    fullName: 'Michael Jackson',
    firstName: 'Michael',
    lastName : 'Jackson',
    dateOfBirth: new Date(), 
    age: 26,
    email:  'esakki.muthu946@gmail.com',
    country:  'India',
    city:  'Chennai',
    socialInfo:  'https://esakki/Angular',
    skills: [{id:1,skillInfo: 'Angular',
                            rate: 6},
                            {id:2,skillInfo: 'Java',
                            rate: 8},
                            {id:3,skillInfo: 'AWS',
                            rate: 6}],
    companyName:  'Ideas@it',
    fromDate:  '01-06-2019',
    toDate:  '01-07-2020',
    role:  'Software Engineer',
    experience:  1,
    phone:  9176145127
  },
  {
    id: 6,
    fullName: 'Donal Trumph',
    firstName: 'Donal',
    lastName : 'Trumph',
    dateOfBirth: new Date(), 
    age: 26,
    email:  'esakki.muthu946@gmail.com',
    country:  'India',
    city:  'Chennai',
    socialInfo:  'https://esakki/Angular',
    skills: [{id:1,skillInfo: 'Angular',
                            rate: 6},
                            {id:2,skillInfo: 'Java',
                            rate: 8},
                            {id:3,skillInfo: 'AWS',
                            rate: 6}],
    companyName:  'Ideas@it',
    fromDate:  '01-06-2019',
    toDate:  '01-07-2020',
    role:  'Software Engineer',
    experience:  1,
    phone:  9176145127
  },
  {
    id: 7,
    fullName: 'Katta Durai',
    firstName: 'Katta',
    lastName : 'Durai',
    dateOfBirth: new Date(), 
    age: 26,
    email:  'esakki.muthu946@gmail.com',
    country:  'India',
    city:  'Chennai',
    socialInfo:  'https://esakki/Angular',
    skills: [{id:1,skillInfo: 'Angular',
                            rate: 6},
                            {id:2,skillInfo: 'Java',
                            rate: 8},
                            {id:3,skillInfo: 'AWS',
                            rate: 6}],
    companyName:  'Ideas@it',
    fromDate:  '01-06-2019',
    toDate:  '01-07-2020',
    role:  'Software Engineer',
    experience:  1,
    phone:  9176145127
  },
  {
    id: 8,
    fullName: 'Kai Pulla',
    firstName: 'Kai',
    lastName : 'Pulla',
    dateOfBirth: new Date(), 
    age: 26,
    email:  'esakki.muthu946@gmail.com',
    country:  'India',
    city:  'Chennai',
    socialInfo:  'https://esakki/Angular',
    skills: [{id:1,skillInfo: 'Angular',
                            rate: 6},
                            {id:2,skillInfo: 'Java',
                            rate: 8},
                            {id:3,skillInfo: 'AWS',
                            rate: 6}],
    companyName:  'Ideas@it',
    fromDate:  '01-06-2019',
    toDate:  '01-07-2020',
    role:  'Software Engineer',
    experience:  1,
    phone:  9176145127
  }
]


  // selectedUserFromList = (selectedUser) =>{
    
  //   console.log(selectedUser);

  // }

}
