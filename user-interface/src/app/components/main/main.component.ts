import { FeedsService } from './../../feeds.service';
import { JobsService } from './../../jobs.service';
import { Component, OnInit, Input } from '@angular/core';
import {Job} from '../../job';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() toggleLoggedIn: any;
  @Input() user: any = { id: null, username: null, displayname: null };
  @Input() removeUser: any;
  @Input() updateUsers: any;
  page = 'Home';
  queries = {jobs: []};

  setMain = (page: string) => {
    if (page === 'Home') {
      this.page = 'Home';
    } else {
      this.page = 'Profile';
    }
  }

  addToQueries = (api: string, call: Job) => {
    delete call.id;
    this.feedsService.updateFeed(call).subscribe(feed => this.queries[api].push(feed));
  }

  getQueries = (api: string) => {
    this.feedsService.getFeeds().subscribe( queries => {
      let updatedQueries: any;
      updatedQueries = {...this.queries};
      updatedQueries[api] = queries;
      this.queries = updatedQueries;
      console.log(this.queries);
    });
  }

  updateQuery = (api: string, id: number) => {
    const result = this.queries[api].find( job => job.id === id);
    const index = this.queries[api].findIndex( job => job.id === id);
    this.feedsService.updateFeed(result).subscribe( feed => {
      let updatedQueries: any;
      updatedQueries = {...this.queries};
      updatedQueries[api][index] = feed;
      this.queries = updatedQueries;
    });
  }

  removeQuery = (api: string, id: number) => {
    const index = this.queries[api].findIndex( job => job.id === id);
    this.feedsService.deleteFeed(id).subscribe(res => {
      if (res === 'OK') {
        let updatedQueries: any;
        updatedQueries = {...this.queries};
        updatedQueries[api].splice(index, 1);
        this.queries = updatedQueries;
      }
    });
  }

  constructor(private feedsService: FeedsService) { }

  ngOnInit() {
    this.getQueries('jobs');
  }

}
