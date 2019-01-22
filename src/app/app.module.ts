import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ExplorePage } from '../pages/explore/explore';
import { TrendingPage } from '../pages/trending/trending';
import { RecFriendsPage } from '../pages/rec-friends/rec-friends';
import { RecInfluencersPage } from '../pages/rec-influencers/rec-influencers';
import { CadastroUserPage } from '../pages/cadastro-user/cadastro-user';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExplorePage,
    TrendingPage,
    RecFriendsPage,
    RecInfluencersPage,
    CadastroUserPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top'}
      ),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExplorePage,
    TrendingPage,
    RecFriendsPage,
    RecInfluencersPage,
    CadastroUserPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   //HTTP
  ]
})
export class AppModule {}
