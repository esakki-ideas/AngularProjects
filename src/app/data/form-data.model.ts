import { Skills } from '../user/skill-info/skill-info.model';
import * as moment from 'moment';


export class FormData {
    // id: number = 1;
    // firstName: string = 'Esakki';
    // lastName : string = 'Muthu';
    // fullName : string = 'Esakki Muthu';
    // email: string = 'esakki.muthu946@gmail.com';
    // dateOfBirth: Date = new Date('2020-07-19');
    // country: string = 'India';
    // city: string = 'Chennai';
    // socialInfo: string = 'https://esakki/Angular';
    // age: Number = 26;
    // skills: Skills[] = [{id:0,skillInfo: '',
    //                         rate: 0}];
    // companyName: string = 'Ideas@it';
    // fromDate: string = '01-06-2019';
    // toDate: string = '01-07-2020';
    // role: string = 'Software Engineer';
    // experience: number = 1;
    // phone: Number = 9176145127;

    id: number = 1;
    firstName: string = '';
    lastName : string = '';
    fullName : string = ' ';
    email: string = '';
    dateOfBirth: Date ;
    country: string = '';
    city: string = '';
    socialInfo: string = '';
    age: Number = 0;
    skills: Skills[] = [{id:0,skillInfo: '',
                            rate: 0}];
    companyName: string = '';
    fromDate: string = '';
    toDate: string = '';
    role: string = '';
    experience: number = 0;
    phone: Number = 0;
}