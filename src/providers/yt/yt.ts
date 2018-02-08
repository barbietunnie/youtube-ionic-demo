import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class YtProvider {

  apiKey = '[PUT YOUR YOUTUBE API KEY HERE]';

  constructor(public http: Http) {
    
  }

  getPlaylistForChannel(channel) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/playlists?key=${this.apiKey}&channelId=${channel}&part=snippet,id&maxResults=20`).map((res) => {
      return res.json()['items'];
    });
  }

  getListVideos(listId) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/playlistItems?key=${this.apiKey}&playlistId=${listId}&part=snippet,id&maxResults=20`).map((res) => {
      return res.json()['items'];
    });
  }
}
