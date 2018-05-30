import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
