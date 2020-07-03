import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactInfoComponent } from './user/contact-info/contact-info.component';
import { GeneralInfoComponent } from './user/general-info/general-info.component';
import { SkillInfoComponent } from './user/skill-info/skill-info.component';
import { WorkInfoComponent } from './user/work-info/work-info.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [  
{ path: 'users',  component: UserComponent },
// 2nd Route
{ path: 'contact',  component: ContactInfoComponent },
// 3rd Route
{ path: 'info',  component: GeneralInfoComponent },
// 4th Route
{ path: 'skill',  component: SkillInfoComponent },
// 5th Route
{ path: 'work', component: WorkInfoComponent },
{ path: '',   redirectTo: '/home', pathMatch: 'full' },
// 6th Route
{ path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
