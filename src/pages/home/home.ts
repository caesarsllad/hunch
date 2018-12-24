import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

items : any;
hunchList : Observable<any>;

  constructor(public navCtrl: NavController, public http: HttpClient) {
	 this.hunchList = this.http.get('http://52.54.158.109/wbs/prevrec/8c9859c4069b7d58ec4810a83521ac45/1');
	 this.hunchList.subscribe(result => {
	 	this.items = result;
	 	console.log(this.items);
	 });

	 //this.http.get('http://52.54.158.109/wbs/prevrec/8c9859c4069b7d58ec4810a83521ac45/1', {}, {})
	 // .then(data => {
	 //	
	 //   console.log(data.status);
	 //   console.log(data.data); // data received by server
	 //   console.log(data.headers);
	 // })
	 // .catch(error => {
	 //   console.log(error.status);
	 //   console.log(error.error); // error message as string
	 //   console.log(error.headers);
	  //});
  }
}
