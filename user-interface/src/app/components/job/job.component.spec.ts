import { MomentModule } from 'angular2-moment/moment.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobComponent } from './job.component';

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobComponent ],
      imports: [
        MomentModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
