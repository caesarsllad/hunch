import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { TrendingPage } from '../trending/trending';
import { RecInfluencersPage } from '../rec-influencers/rec-influencers';
import { RecFriendsPage } from '../rec-friends/rec-friends';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {

  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;

  constructor() {
  	this.tab1 = HomePage;
  	this.tab2 = TrendingPage;
  	this.tab3 = RecInfluencersPage;
  	this.tab4 = RecFriendsPage;
  }

}
