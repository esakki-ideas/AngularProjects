import { Injectable } from '@angular/core';
import {FormData} from './form-data.model';
import { User } from '../user/user.model';
import { GeneralInfo } from '../user/general-info/gernal-info.model';
import { Skills } from '../user/skill-info/skill-info.model';
import { Work } from '../user/work-info/work-info.model';


@Injectable()
export class FormDataService {

  private formData : FormData = new FormData();
  constructor() { }

  setUserInfo(user: User) {
    this.formData.firstName = user.firstName;
    this.formData.lastName = user.lastName;
    this.formData.fullName = user.fullName;
    this.formData.dateOfBirth = new Date(user.dateOfBirth);
    this.formData.age= user.age;
  };

  getUserInfo() : User {
    var userInfo : User = {
      firstName: this.formData.firstName,
      lastName : this.formData.lastName,
      fullName : this.formData.fullName,
      dateOfBirth: this.formData.dateOfBirth.toDateString(),
      age: this.formData.age
    };
    return userInfo;
  }

  setGeneralInfo(info: GeneralInfo) {
    this.formData.socialInfo = info.socialInfo;
    this.formData.phone = info.phone;
    this.formData.email= info.email;
  };

  getGeneralInfo() : GeneralInfo {
    var generalInfo : GeneralInfo = {
      email: this.formData.email,
      socialInfo: this.formData.socialInfo,
      phone : this.formData.phone,
    
    };
    return generalInfo;
  }

  setSkillInfo(skill: Skills[]) {
    this.formData.skills = skill;
  };

  getSkillInfo() : Skills[] {
    var skillInfo : Skills[] = this.formData.skills;
    return skillInfo;
  }

  setWorkInfo(work: Work){
    this.formData.toDate = work.toDate;
    this.formData.fromDate = work.fromDate;
    this.formData.companyName = work.companyName;
    this.formData.city = work.city;
    this.formData.country = work.country;
    this.formData.experience = work.experience;
    this.formData.role = work.role;
  }

  getWorkInfo() : Work {
    var workInfo : Work = {
    toDate : this.formData.toDate,
    fromDate : this.formData.fromDate ,
    companyName : this.formData.companyName,
    city : this.formData.city,
    country : this.formData.country,
    experience : this.formData.experience,
    role: this.formData.role
    }
    return workInfo;
  }

  getFormData() : FormData {
    var formData : FormData = this.formData;
    return formData;
  }

  setFormData(formData: FormData) {
    this.formData = formData;
  }
}
