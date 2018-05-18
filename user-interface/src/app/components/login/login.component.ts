import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  users: any;

  ngOnInit() {
    this.usersService.getUsers().subscribe( users => this.users = users );
  }

}
