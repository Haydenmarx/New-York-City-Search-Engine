import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {
  url = `${environment.apiHost}/api/jobs`;

  constructor(private httpClient: HttpClient) { }

  getFeeds = () => {
    console.log('||', this.url, '||');
    return this.httpClient.get(this.url);
  }

  deleteFeed = (feedId) => {
    return this.httpClient.delete(this.url.concat('/', feedId));
  }

  updateFeed = (feed: any) => {
    return this.httpClient.post(this.url, feed);
  }
}
