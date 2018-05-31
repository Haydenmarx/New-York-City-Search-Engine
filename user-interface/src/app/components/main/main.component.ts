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
    console.log('call:', call);
    delete call.id;
    this.feedsService.updateFeed(call).subscribe(feed => this.queries[api].push(feed));
  }

  getQueries = () => {
    this.feedsService.getFeeds().subscribe( queries => {
      let updatedQueries: any;
      updatedQueries = {...this.queries};
      updatedQueries.jobs = queries;
      this.queries = updatedQueries;
      console.log(this.queries);
    });
  }

  /*
  ** Jobs are saved in main in array
  **
  ** if array is empty -- link to profile to add apis
  **
  ** profile shows apis + button to add more which creates one
  **
  ** it is not pushed until saved
  ** also update and delete is in title
  **
  */

  constructor(private feedsService: FeedsService) { }

  ngOnInit() {
    this.getQueries();
  }

}
