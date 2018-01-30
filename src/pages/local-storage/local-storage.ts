import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { localStorage } from './../../providers/LocalStorage/localStorage';
//import { phoneDetails } from '../../models/phoneDetails';

@IonicPage()
@Component({
  selector: 'page-local-storage',
  templateUrl: 'local-storage.html',
})
export class LocalStoragePage {
  detailsObj = {
  user: "",
  newDL : false,
  country: ""
};

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private localStorage : localStorage) {
    //  this.localStorage.addDetails(this.detailsObj);
  }






  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalStoragePage');
  }

}
