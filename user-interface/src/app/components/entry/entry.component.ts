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
  loginError = '';

  signup = false;
  signupError = '';

  signInUser = (username: string) => {
    const result = this.users.find( user => user.username.toLowerCase() === username.toLowerCase());
    if (result === undefined) {
      this.loginError = 'Can\'t find user';
    } else {
      this.user = result;
      this.loginError = '';
      this.toggleLoggedIn();
    }
  }

  toggleLoggedIn = () => {
    this.loggedIn = !this.loggedIn;
  }

  toggleForm = (destination: string) => {
    if (this.login === true && destination === 'signup') {
      this.login = false;
      this.signup = true;
      this.loginError = '';
    } else if (this.signup === true && destination === 'login') {
      this.login = true;
      this.signup = false;
      this.signupError = '';
    }
  }

  updateUsers = (user) => {
    const updateUser = this.users.find( oldUser => oldUser.username === user.username);
    this.users[updateUser.id] = user;
    this.user = user;
  }

  createUser = (username: string) => {
    if (this.users.find( user => user.username.toLowerCase() === username.toLowerCase()) === undefined) {
      this.usersService.addUser({username: username}).subscribe( newUser => {
        this.user = newUser;
        this.usersService.getUsers().subscribe( users => this.users = users );
        this.toggleLoggedIn();
        this.signupError = '';
        this.toggleForm('login');
      });
    } else {
      this.signupError = 'Username already exists';
    }
  }

  removeUser = (userId: number) => {
    this.users = this.users.filter( user => user.id !== userId);
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe( users => {this.users = users; /*console.log(users);*/ } );
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
