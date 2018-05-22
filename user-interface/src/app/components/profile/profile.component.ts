import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user: any;
  @Input() toggleLoggedIn: any;
  @Input() removeUser: any;
  @Input() updateUsers: any;
  displayname: string;

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

  ngOnInit() {
  }

}
