import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() title: any;
  @Input() section: any;
  expanded = false;

  toggleExpanded = () => {
      this.expanded = !this.expanded;
  }

  constructor() { }

  ngOnInit() {
  }

}
