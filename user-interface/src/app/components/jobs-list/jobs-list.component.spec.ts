import { MomentModule } from 'angular2-moment/moment.module';
import { JobCardComponent } from './../job-card/job-card.component';
import { JobComponent } from './../job/job.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsListComponent } from './jobs-list.component';

describe('JobsListComponent', () => {
  let component: JobsListComponent;
  let fixture: ComponentFixture<JobsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsListComponent, JobCardComponent, JobComponent ],
      imports: [
        MomentModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
