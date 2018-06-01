import { environment } from './../environments/environment.prod';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  url = `${environment.apiHost}/api/users`;

  getUsers = () => {
    // console.log('||', this.url, '||');
    return this.httpClient.get(this.url);
  }

  addUser = (user) => {
    return this.httpClient.post(this.url, user);
  }

  deleteUser = (userId) => {
    return this.httpClient.delete(this.url.concat('/', userId));
  }

  updateUser = (user: any) => {
    return this.httpClient.post(this.url, user);
  }

}

