import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() toggleLoggedIn: any;
  @Input() user: any;
  page = 'Home';

  setMain = (page: string) => {
    if (page === 'Home') {
      this.page = 'Home';
    } else {
      this.page = 'Profile';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
