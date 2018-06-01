import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JobComponent } from './../job/job.component';
import { MomentModule } from 'angular2-moment/moment.module';
import { JobCardComponent } from './../job-card/job-card.component';
import { JobsListComponent } from './../jobs-list/jobs-list.component';
import { ApiJobsComponent } from './../api-jobs/api-jobs.component';
import { ProfileComponent } from './../profile/profile.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        JobsListComponent, JobCardComponent, JobComponent,
        NavbarComponent,
        ProfileComponent, ApiJobsComponent
      ],
      imports: [
        FormsModule, MomentModule, HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async (() => {
    expect(component).toBeTruthy();
  }));
});
