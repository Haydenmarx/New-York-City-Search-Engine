import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { EntryComponent } from './components/entry/entry.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobComponent } from './components/job/job.component';
import { MomentModule } from 'angular2-moment/moment.module';
import { ApiJobsComponent } from './components/api-jobs/api-jobs.component';
import { JobCardComponent } from './components/job-card/job-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    MainComponent,
    ProfileComponent,
    FourOhFourComponent,
    EntryComponent,
    NavbarComponent,
    JobsListComponent,
    JobComponent,
    ApiJobsComponent,
    JobCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
