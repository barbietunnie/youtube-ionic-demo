import { PlaylistPage } from './../pages/playlist/playlist';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { YtProvider } from '../providers/yt/yt';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlaylistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlaylistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YtProvider,
    YoutubeVideoPlayer
  ]
})
export class AppModule {}
