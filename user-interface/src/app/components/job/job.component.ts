import { Job } from './../../job';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input() job: any = new Job(9999, 9999);
  job_description = false;
  display = false;
  minimum_qual_requirements = false;
  preferred_skills = false;
  hours_shift = false;
  to_apply = false;
  residency_requirement = false;
  additional_information = false;

  toggle = (category: string) => {
    this[category] = !this[category];
  }

  constructor() { }

  ngOnInit() {
  }

}
