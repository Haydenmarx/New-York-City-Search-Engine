import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {
  url = `${environment.apiHost}/api/jobs`;

  constructor(private httpClient: HttpClient) { }

  getAllFeeds = () => {
    console.log('||', this.url, '||');
    return this.httpClient.get(this.url);
  }

  getUserFeeds = (userId) => {
    return this.httpClient.get(this.url.concat('/', userId));
  }

  deleteFeed = (feedId) => {
    return this.httpClient.delete(this.url.concat('/', feedId));
  }

  updateFeed = (feed: any) => {
    return this.httpClient.post(this.url, feed);
  }
}
