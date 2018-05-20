import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() data: any;
  @Input() func: any;

  formData = {
    username: '',
  };

  constructor() { }

  ngOnInit() {}
}
