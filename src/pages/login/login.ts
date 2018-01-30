import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin';
import {User } from '../../models/user';
import { StartupProvider } from './../../providers/startup/startup';
import { LoginStatusProvider } from './../../providers/login-status/login-status';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	/*@ViewChild('username') user;
	@ViewChild('password') password;*/
  user = {} as User;
  retrieveData : any;

  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,
              private LoginStatusProvider: LoginStatusProvider) {
    this.retrieveData = this.LoginStatusProvider.getLoginStatus();
    console.log(this.retrieveData);
    if(this.retrieveData._zone_symbol_value == null)
    {
      console.log('getLoginStatus ran in login page');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser(user:User) {
    this.fire.auth.signInWithEmailAndPassword(user.email, user.password)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      //this.alert('Success! You\'re logged in');
    //  this.navCtrl.setRoot( LoggedinPage );
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
  	console.log('Would sign in with ', user.email, user.password);
  }

}
