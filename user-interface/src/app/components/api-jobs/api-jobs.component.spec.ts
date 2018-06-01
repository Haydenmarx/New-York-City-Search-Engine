import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiJobsComponent } from './api-jobs.component';
import { FormsModule } from '@angular/forms';

describe('ApiJobsComponent', () => {
  let component: ApiJobsComponent;
  let fixture: ComponentFixture<ApiJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiJobsComponent ],
      imports : [
        FormsModule,
        HttpClientModule
      ]
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
