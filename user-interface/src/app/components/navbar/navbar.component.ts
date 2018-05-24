import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() toggleLoggedIn: any;
  @Input() user: any = { id: null, username: null, displayname: null };
  @Input() setMain: any;

  constructor() { }

  ngOnInit() {
  }

}
