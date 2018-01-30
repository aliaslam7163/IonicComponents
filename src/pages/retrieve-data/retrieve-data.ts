import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

import { question } from '../../models/question';

/**
 * Generated class for the RetrieveDataPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-retrieve-data',
  templateUrl: 'retrieve-data.html',
})
export class RetrieveDataPage {

  directory : FirebaseListObservable<any[]>;
  questions : FirebaseListObservable<any[]>;
  todos : FirebaseListObservable<any[]>;
  updates: FirebaseListObservable<any[]>;
  users : FirebaseListObservable<any[]>;

  question = {} as question;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public db:AngularFireDatabase,
  public firebaseProvider : FirebaseProvider) {
    this.directory = this.firebaseProvider.getDirectoryItems();
    this.questions = this.firebaseProvider.getQuestions();
    this.todos = this.firebaseProvider.todosItems();
    this.updates = this.firebaseProvider.updateItems();
    this.users = this.firebaseProvider.userItems();


    //this.directory = db.list('/directory');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetrieveDataPage');
    //console.log(this.directory);
  }

}
