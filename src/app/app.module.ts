import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { RegisterPage } from '../pages/register/register';
import { RetrieveDataPage } from '../pages/retrieve-data/retrieve-data';
import { NewDownloadUserPage } from '../pages/new-download-user/new-download-user';
import { BusinessesPage } from '../pages/businesses/businesses';
import { BusinessDetailsPage } from '../pages/business-details/business-details';
import { BusinessFilterPage } from '../pages/business-filter/business-filter';
import { LocalStoragePage } from '../pages/local-storage/local-storage';
//import { SendQuestionPage } from '../pages/send-question/send-question';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { localStorage } from '../providers/LocalStorage/localStorage';
import {IonicStorageModule} from '@ionic/storage';
import { StartupProvider } from '../providers/startup/startup';
import { LoginStatusProvider } from '../providers/login-status/login-status';
import { Network } from '@ionic-native/network';
import { FilterBusinessPipe } from '../pipes/filter-business/filter-business';




/*const firebaseAuth = {
    apiKey: "AIzaSyDuTpz2cRtG6Ssjgx-CoSlTQ0b1vKnVN8s",
    authDomain: "test-project-7d0fc.firebaseapp.com",
    databaseURL: "https://test-project-7d0fc.firebaseio.com",
    projectId: "test-project-7d0fc",
    storageBucket: "",
    messagingSenderId: "322928714348"
  };*/

  var firebaseAuth = {
  apiKey: "AIzaSyBK2FYCKx8Kn8kqjLkhgXtNasS32fqjIGo",
  authDomain: "myionicapp-298c7.firebaseapp.com",
  databaseURL: "https://myionicapp-298c7.firebaseio.com",
  projectId: "myionicapp-298c7",
  storageBucket: "myionicapp-298c7.appspot.com",
  messagingSenderId: "359793712146"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    RetrieveDataPage,
    //SendQuestionPage,
    NewDownloadUserPage,
    LocalStoragePage,
    BusinessesPage,
    BusinessFilterPage,
    BusinessDetailsPage,
    FilterBusinessPipe,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule,
  //  IonicStorageModule.forRoot(),
  IonicStorageModule.forRoot({
     name: '__mydb',
        driverOrder: [ 'sqlite', 'indexeddb','websql']
   }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    RetrieveDataPage,
  //  SendQuestionPage,
    NewDownloadUserPage,
    LocalStoragePage,
    BusinessesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    localStorage,
    StartupProvider,
    LoginStatusProvider,
    Network,
  ]
})
export class AppModule {}
