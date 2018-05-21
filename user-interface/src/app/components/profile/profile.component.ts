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
  displayname: string;

  constructor(private usersService: UsersService) { }

  deleteMyself = () => {
    const checker = prompt('Are you sure you want to permently Delete your profile and all saved information?\nYes or No');
    if (checker.toLowerCase() === 'yes') {
      this.usersService.deleteUser(this.user.id).subscribe( data => this.removeUser(this.user.id) );
      this.toggleLoggedIn();
    }
  }

  updateProfile = () => {
    this.user.displayname = this.displayname;
    this.usersService.updateUser(this.user).subscribe( response => {
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
