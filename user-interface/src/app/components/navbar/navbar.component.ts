import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() toggleLoggedIn: any;
  @Input() user: any;
  @Input() setMain: any;

  constructor() { }

  ngOnInit() {
  }

}
