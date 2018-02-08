import { PlaylistPage } from './../playlist/playlist';
import { YtProvider } from './../../providers/yt/yt';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  channelId = 'UCZZPgUIorPao48a1tBYSDgg';
  playlists: Observable<any[]>;

  constructor(
    public navCtrl: NavController, 
    private ytProvider: YtProvider,
    private alertCtrl: AlertController
  ) {

  }

  searchPlaylist() {
    this.playlists = this.ytProvider.getPlaylistForChannel(this.channelId);
    this.playlists.subscribe(data => {
      console.log('data: ', data);
    }, err => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'No playlists found for that channel ID',
        buttons: ['Ok']
      });
      alert.present();
    });
  }

  openPlaylist(id) {
    this.navCtrl.push(PlaylistPage, {id: id});
  }

}
