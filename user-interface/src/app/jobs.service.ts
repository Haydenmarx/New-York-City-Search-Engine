import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private httpClient: HttpClient) { }

  getJobs = (url) => {
    // console.log('||', url, '||');
    return this.httpClient.get(url);
  }
}
