import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiJobsComponent } from './api-jobs.component';

describe('ApiJobsComponent', () => {
  let component: ApiJobsComponent;
  let fixture: ComponentFixture<ApiJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
