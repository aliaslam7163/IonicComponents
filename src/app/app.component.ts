import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { StartupProvider } from '../providers/startup/startup';
import { LoginStatusProvider } from '../providers/login-status/login-status';
import { HomePage } from '../pages/home/home';
import { RetrieveDataPage } from '../pages/retrieve-data/retrieve-data';
import { BusinessesPage } from '../pages/businesses/businesses';
@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage:any = HomePage;
  getData : any;
  setData : any;
  retrieveData:any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
               private StartupProvider:StartupProvider,
              private LoginStatusProvider : LoginStatusProvider
          ) {

    platform.ready().then(() => {

//  to obtain the local directoryStorage
    // this.LoginStatusProvider.getDirectoryAsync();



   //this.getData =
  // this.LoginStatusProvider.getLoginStatus();
//  this.LoginStatusProvider.getDirectoryAsync();
  //  console.log(this.getData.__zone_symbol__value);




    /* If/else to determine which page to direct after opening app
      if(this.getData.__zone_symbol__value == '')
      {
         this.LoginStatusProvider.setLoginStatus();
         this.rootPage = RetrieveDataPage;
      }
      else if (this.getData.__zone_symbol__value != ''){
        console.log('Skipped the if');
        this.rootPage = LoginPage;

      }
    */


      /* Set up new download timestamp */
      //  this.LoginStatusProvider.setLoginStatus();
        //  this.LoginStatusProvider.setLoginAsync();



      /* Clear out local Storage
          this.StartupProvider.clearLocalStorage();
      */

     /* saving directory from fb to local */
    // this.getData = this.StartupProvider.getDirectoryFirebase();
      //this.StartupProvider.saveDirectory2Local();
      this.StartupProvider.checkOnlineConnectivity();
    //  this.rootPage = BusinessesPage;

    });


  }
}
