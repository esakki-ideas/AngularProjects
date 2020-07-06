import { Skills } from '../user/skill-info/skill-info.model';

export class FormData {
    id: number = 1;
    firstName: string = 'Esakki';
    lastName : string = 'Muthu';
    fullName : string = 'Esakki Muthu';
    email: string = 'esakki.muthu946@gmail.com';
    dateOfBirth: Date =  new Date('19/07/1995');
    country: string = 'India';
    city: string = 'Chennai';
    socialInfo: string = 'https://esakki/Angular';
    age: Number = 26;
    skills: Skills[] = [{id:1,skillInfo: 'Angular',
                            rate: 6},
                            {id:2,skillInfo: 'Java',
                            rate: 8},
                            {id:3,skillInfo: 'AWS',
                            rate: 6}];
    companyName: string = 'Ideas@it';
    fromDate: string = '01-06-2019';
    toDate: string = '01-07-2020';
    role: string = 'Software Engineer';
    experience: number = 1;
    phone: Number = 9176145127;
    

    // clear() {
    //     this.firstName = '';
    //     this.lastName  = '';
    //     this.fullName  = '';
    //     this.email = '';
    //     this.dateOfBirth =  new Date('19/07/1995');
    //     this.country = '';
    //     this.city = '';
    //     this.socialInfo = '';
    //     this.age = 0;
    //     this.skills=[];
    //     this.companyName = '';
    //     this.fromDate = '';
    //     this.toDate = '';
    //     this.role = '';
    //     this.experience = 0;
    //     this.phone=0;
    // }
}