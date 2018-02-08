import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { YtProvider } from './../../providers/yt/yt';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the PlaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
  videos: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ytProvider: YtProvider, private ytPlayer: YoutubeVideoPlayer, private plt: Platform) {
    let listId = this.navParams.get('id');

    this.videos = this.ytProvider.getListVideos(listId);
    this.videos.subscribe(data => {
      console.log(data);
    })
  }

  openVideo(video) {
    if(this.plt.is('cordova')) {
      this.ytPlayer.openVideo(video.snippet.resourceId.videoId);
    } else {
      window.open(`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`);
    }
  }

}
