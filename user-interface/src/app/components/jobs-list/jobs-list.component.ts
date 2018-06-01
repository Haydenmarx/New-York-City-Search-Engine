import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  constructor() { }

  @Input() jobs: any;
  @Input() queries: any;

  ngOnInit() {
  }

}
