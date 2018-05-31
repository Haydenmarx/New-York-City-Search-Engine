import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  constructor() { }

  @Input() jobs: any;
  expanded = false;

  toggleExpanded = () => {
      console.log(this.jobs);
      this.expanded = !this.expanded;
  }

  showJobs = () => {
    this.jobs = this.jobs.map(job => {
        job.minimum_qual_requirements = job.minimum_qual_requirements.replace( /(\d\.)+/g, (li, item) => {
         if (item === '1.') {
            return li;
         } else {
            return '<br /><br />' + li;
         }
        });
        job.job_description = job.job_description.replace( /(â€¢\t)+/g, (linebreak) => '<br /><br />');
        job.preferred_skills = job.preferred_skills.replace( /(â€¢\t)+/g, (linebreak) => '<br /><br />');
        job.to_apply = job.to_apply.replace( /(â€¢\t)+/g, (linebreak) => '<br /><br />');
        return job;
    });
  }

  ngOnInit() {
    this.showJobs();
  }

}
