import { MomentModule } from 'angular2-moment/moment.module';
import { ApiJobsComponent } from './../api-jobs/api-jobs.component';
import { JobComponent } from './../job/job.component';
import { JobCardComponent } from './../job-card/job-card.component';
import { JobsListComponent } from './../jobs-list/jobs-list.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { MainComponent } from './../main/main.component';
import { SigninComponent } from './../signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryComponent } from './entry.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EntryComponent', () => {
  let component: EntryComponent;
  let fixture: ComponentFixture<EntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EntryComponent, SigninComponent, LoginComponent,
        MainComponent,
        NavbarComponent,
        ProfileComponent, ApiJobsComponent,
        JobsListComponent, JobCardComponent, JobComponent
      ],
      imports: [
        HttpClientModule, FormsModule, RouterTestingModule, MomentModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
