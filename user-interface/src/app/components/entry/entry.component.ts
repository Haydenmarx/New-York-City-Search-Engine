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

  users: any;
  login = false;
  signin = false;

  signInUser = (username: string) => {
    const result = this.users.find( user => user.username.toLowerCase() === username.toLowerCase());
    console.log('REsult::', result);
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe( users => this.users = users );
    this.route.data
    .subscribe( data => {
      if (data.form === 'signin') {
        this.login = false;
        this.signin = true;
      } else {
        this.login = true;
        this.signin = false;
      }
    });
  }
}
