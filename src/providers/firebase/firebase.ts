import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { question } from '../../models/question';



/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public http: Http,
              public afd: AngularFireDatabase) {
    //console.log('Hello FirebaseProvider Provider');
  }

  getDirectoryItems(){
    return this.afd.list('/directory/')
  }

  getQuestions(){
    return this.afd.list('/questions/');

  }
  todosItems(){
    return this.afd.list('/todos/');
  }
  updateItems(){
    return this.afd.list('/updates/');
  }
  userItems(){
    return this.afd.list('/users/');
  }

  sendQuestion(){
    return this.afd.list('/questions/').push({});
  }


}
