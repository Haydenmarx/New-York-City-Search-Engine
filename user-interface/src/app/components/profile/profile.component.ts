import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../users.service';
import { Job } from '../../job';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user: any = { id: null, username: null, displayname: null };
  @Input() toggleLoggedIn: any;
  @Input() removeUser: any;
  @Input() updateUsers: any;
  @Input() queries: any = {jobs: []};
  displayname: string;
  unsavedQueries = {jobs: []};
  index = 0;

  job = {
    query: 'https://data.cityofnewyork.us/resource/swhp-yxa4.json?',
    title: 'Job Search: Any',
    agencies: 'Any',
    postingType: 'Any',
    numberOfPositions: 'Any',
    businessTitle: 'Any',
    civilServiceTitle: 'Any',
    index: 0
  };

  constructor(private usersService: UsersService) { }

  deleteMyself = () => {
    const checker = confirm('Are you sure you want to permanently Delete your profile and all saved information?');
    if (checker === true) {
      this.usersService.deleteUser(this.user.id).subscribe( data => this.removeUser(this.user.id) );
      this.toggleLoggedIn();
    }
  }

  updateProfile = () => {
    const updatedUser = {...this.user};
    updatedUser.displayname = this.displayname;
    this.usersService.updateUser(updatedUser).subscribe( user => {
      this.updateUsers(user);
    });
  }

  addFeed = () => {
    this.unsavedQueries.jobs.unshift(new Job(this.index));
    this.index++;
  }

  updateFeed = (api: string, index: number, param: string, data: string) => {
    const found = this.unsavedQueries[api].findIndex(job => job.index === index);
    found[param] = data;
  }

  removeFeed = (api: string, index: number) => {
    const found = this.unsavedQueries[api].findIndex(job => job.index === index);
    this.unsavedQueries[api].splice(found, 1);
  }

  ngOnInit() {
  }

}
