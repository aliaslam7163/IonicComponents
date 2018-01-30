import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import {RetrieveDataPage} from '../retrieve-data/retrieve-data';
import { LocalStoragePage } from '../local-storage/local-storage';
import { BusinessesPage } from '../businesses/businesses';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('username') uname;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  signIn() {
  	this.navCtrl.push(LoginPage);
  }

  register() {
  	this.navCtrl.push(RegisterPage);
  }

  retrieveData(){
    this.navCtrl.push(BusinessesPage);
  }

  localStorage(){
    this.navCtrl.push(LocalStoragePage);
  }


}
