import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {AngularFireDatabase} from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { Platform } from 'ionic-angular';
import { Network } from '@ionic-native/network';


@Injectable()
export class StartupProvider {
  userData:any;
  directory : FirebaseListObservable<any[]>;
  directoryStorage=[];
  i:number=0;
   constructor(public http: Http,
              private storage: Storage,
              public db:AngularFireDatabase,
              public firebaseProvider : FirebaseProvider,
              private platform:Platform,
              private network: Network) {
    console.log('Hello StartupProvider Provider');

  }

  clearLocalStorage(){
  //  this.storage.clear();
  }

 saveDirectory2Local(){
  //  console.log(this.directoryStorage);

    this.storage.set('directory',this.directoryStorage);
  }

  getLocalDirectory(){
    this.storage.get('directory').then((returnVal:any) => {
      //console.log(returnVal);
    });
  }

  getDirectoryFirebase(){
    this.firebaseProvider.getDirectoryItems()
    .subscribe(elementsInFBDirectory => {
      //console.log(elementsInFBDirectory);
      elementsInFBDirectory.forEach(item =>{
        this.directoryStorage[this.i] = item;
        this.i = this.i + 1;
      });

        this.saveDirectory2Local();

    });
    console.log(this.directoryStorage);
    return this.directoryStorage;
  }

  checkOnlineConnectivity(){

    //console.log((this.platform.platforms()));
    if((!(this.platform.is('core'))))// || !(this.platform.is('mobileweb'))
          {
            if(this.network.type != '')
            {
              this.getDirectoryFirebase();
            }
            else{
              this.network.onConnect().subscribe((data) =>{
                if(data.type != '')
                {
                    this.getDirectoryFirebase();
                }
              });
              this.getLocalDirectory();
            }
          }
    else{
            this.getDirectoryFirebase();
        }

  }


}
