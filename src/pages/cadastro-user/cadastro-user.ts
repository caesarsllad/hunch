import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { HomePage } from '../home/home';
//import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the CadastroUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-user',
  templateUrl: 'cadastro-user.html',
})

export class CadastroUserPage {
  name: string;
  username: string;
  email: string;
  password: any;
  confirmpass: any;
  agreed: boolean;
  path: string;

  registerLink : any;
  registerString: string;

  loginLink: any;
  loginString: string;
  
  userData: {COD_RETORNO: number, 
  		  DESC_ERRO?: string, 
  		  JOGA_ID_JOGADOR?: string,
  		  AUTH_HASH?: string
  		};

// /newplay/@name/@alias/@email/@path/@muni
// http://52.54.158.109/wbs/prevrec/
// http://www.hunch-app.com/users_img/sportsfreak.jpg
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  registerUser(){
  	this.path = "http://www.hunch-app.com/users_img/sportsfreak.jpg";
  	//this.path = this.path.replace("/","%2F");
  	this.path = "sportsfreak.jpg";
  	if (this.password == this.confirmpass) {
  		alert("Success! Sem MD5" + this.password + " Com MD5 " + Md5.hashStr(this.password));
  		this.registerString = "http://52.54.158.109/wbs/newplay/" + this.name + "/" + this.username  + "/" +  
  		Md5.hashStr(this.password)	+ "/" + this.email + "/" + this.path + "/";
  		//console.log(Md5.hashStr(this.password));
  		//console.log(this.registerString);
  		this.registerLink = this.http.get(this.registerString);
	    this.registerLink.subscribe(result => {
	 	   this.userData = result;
	 	   // alert(this.userData.AUTH_HASH + " - " + this.userData.COD_RETORNO + " - " + this.userData.DESC_ERRO + " - " + this.userData.JOGA_ID_JOGADOR );
	 	   if (this.userData.COD_RETORNO == 1) {
	 	   	 alert(this.userData.DESC_ERRO);
	 	   } else {
	 	   	 /*this.loginString == "http://52.54.158.109/wbs/newplay/" + this.email + "/" + Md5.hashStr(this.password);
	 	   	 this.loginLink = this.http.get(this.loginString);
	 	   	 this.loginLink.subscribe(login => {
	 	   	 	this.userData = login
	 	   	 	if (this.userData.COD_RETORNO == 1) {
	 	   	 		alert(this.userData.DESC_ERRO);
	 	   	 	} else {*/
	 	   	 		this.navCtrl.setRoot(HomePage);
	 	   	 	//}
	 	   	 //})
	 	   }
	 	   //console.log(this.items);
	});
  	} else {
  		alert("Password doesn't match!");
  	}
  }

}
