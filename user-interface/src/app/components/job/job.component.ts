import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input() job: any;
  job_description = false;
  display = false;
  minimum_qual_requirements = false;
  preferred_skills = false;
  hours_shift = false;
  to_apply = false;

  toggle = (category: string) => {
    this[category] = !this[category];
  }

  constructor() { }

  ngOnInit() {
  }

}
