import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  loggedIn = false;

  users: any;
  user: any;

  login = false;
  loginError: string;

  signup = false;
  signupError: string;

  signInUser = (username: string) => {
    const result = this.users.find( user => user.username.toLowerCase() === username.toLowerCase());
    if (result === undefined) {
      this.loginError = 'Cant find user.';
    } else {
      this.user = result;
      this.toggleLoggedIn();
    }
  }

  toggleLoggedIn = () => {
    this.loggedIn = !this.loggedIn;
  }

  toggleForm = () => {
    if (this.login === true) {
      this.login = false;
      this.signup = true;
    } else {
      this.login = true;
      this.signup = false;
    }
  }

  createUser = (username: string) => {
    if (this.users.find( user => user.username.toLowerCase() === username.toLowerCase()) === undefined) {
      this.usersService.addUser({username: username}).subscribe( newUser => {
        this.user = newUser;
        this.usersService.getUsers().subscribe( users => this.users = users );
        this.toggleLoggedIn();
      });
    } else {
      this.signupError = 'Username already exists.';
    }
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe( users => this.users = users );
    this.route.data
    .subscribe( data => {
      if (data.form === 'signup') {
        this.login = false;
        this.signup = true;
      } else {
        this.login = true;
        this.signup = false;
      }
    });
  }
}
