import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './home/user-list/user-list.component';
import { GeneralInfoComponent } from './user/general-info/general-info.component';
import { ContactInfoComponent } from './user/contact-info/contact-info.component';
import { SkillInfoComponent } from './user/skill-info/skill-info.component';
import { WorkInfoComponent } from './user/work-info/work-info.component';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './home/user-list/user-card/user-card.component';
import { NavBarComponent } from './user/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneMaskDirective } from './phone-mask-directive.directive';
import { FormDataService }    from './data/form-data.service';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UserListComponent,
    GeneralInfoComponent,
    ContactInfoComponent,
    SkillInfoComponent,
    WorkInfoComponent,
    HeaderComponent,
    UserCardComponent,
    NavBarComponent,
    PhoneMaskDirective,
    UserDetailComponent,
    SearchPipePipe,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:    [{ provide: FormDataService, useClass: FormDataService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
