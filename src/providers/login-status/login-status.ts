import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {AngularFireDatabase} from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Platform} from 'ionic-angular';
/*
  Generated class for the LoginStatusProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginStatusProvider {
setData : any;
getData: any;
date = new Date();
//today = this.date.getDate();
  constructor(public http: Http,
    private storage: Storage,
    public db:AngularFireDatabase,
    public firebaseProvider : FirebaseProvider,
    private platform: Platform) {
    console.log('Hello LoginStatusProvider Provider');
  }

  getLoginStatus(){
    this.storage.get('directory').then((value: any) => {
    console.log('loginStatus key holds the following value in the local storage', value);

    /** if the value is set */
    if (value) return;

    /** if the value is not set */
    this.getData = value;
    //console.log(this.getData);
    return;
}).catch((errorGet: any) => {
    console.error(errorGet);
    return;
});



  }

/*  setLoginStatus(){
//await  this.storage.set('loginStatus',Date.now());
    let myObservable = Observable.create(observer => {
    console.log('observer is setup');
    observer.next(this.storage.set('loginStatus',this.date));
  });

  myObservable.subscribe((data) => {
    this.setData = data;
    //console.log(this.setData);
  });
//  return this.setData;

}*/

   setLoginAsync(){

     this.storage.set('loginStatus',Date.now());
  }

async   getDirectoryAsync(){
   await this.storage.get('directory').then((items:any) =>{
     //console.log(items);
   });
  }



}
