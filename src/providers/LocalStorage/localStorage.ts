import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PhoneDetails } from '../../models/phoneDetails';
import { Storage } from '@ionic/storage';


@Injectable()
export class localStorage{
    details:Array<any>=  [];

    constructor(
                private storage: Storage) {}

/*  addDetails(//phone:any,
              details:{},
            // country:any,
            ){
               const element = details;//new PhoneDetails(user);
               //phone,user,country,newDL
               //this.details.push(element);
               //console.log(phone);
               //console.log(details);
               //console.log(country);
               //console.log(newDL);

               this.details.push(element);
               console.log("this is the first object" + this.details[0].user);
              // this.storage.clear();
               //this.storage.set('details',this.details);
               this.storage.get('details').then((val) => {
                    //console.log(val);
                    if(!val[0].newDL){
                  this.storage.set('details[0].newDL',true).then();
                  }
                 });
                  this.storage.get('details').then((val) => {
                    console.log(val);
                  });
             }*/

    getCategories(): Promise<any[]>
     {
        return this.storage.get('directory').then(categories => Object.keys(categories).map(key => categories[key]));
     }




}
