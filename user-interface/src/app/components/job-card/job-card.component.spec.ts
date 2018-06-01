import { MomentModule } from 'angular2-moment/moment.module';
import { JobComponent } from './../job/job.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCardComponent } from './job-card.component';

describe('JobCardComponent', () => {
  let component: JobCardComponent;
  let fixture: ComponentFixture<JobCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCardComponent, JobComponent ],
      imports: [
        MomentModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
