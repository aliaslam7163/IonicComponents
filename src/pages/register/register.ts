import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';
import {User} from '../../models/user';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


	user = {} as User;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams,
    private storage:Storage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser(user:User) {
    this.fire.auth.createUserWithEmailAndPassword(user.email, user.password)
    .then(data => {
      console.log('got data ', data);
      this.alert('Registered!');
    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });
  	console.log('Would register user with ', user.email, user.password);
    this.storage.set('loginStatus','Online');
  }

}
