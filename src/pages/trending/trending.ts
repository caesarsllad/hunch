import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the TrendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trending',
  templateUrl: 'trending.html',
})
export class TrendingPage {

items : any;
trendList : Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
	 this.trendList = this.http.get('http://52.54.158.109/wbs/hashtre/8c9859c4069b7d58ec4810a83521ac45');
	 this.trendList.subscribe(result => {
	 	this.items = result;
	 	console.log(this.items);
	 });
  }

}
