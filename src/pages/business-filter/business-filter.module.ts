import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessFilterPage } from './business-filter';

@NgModule({
  declarations: [
    BusinessFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessFilterPage),
  ],
  exports: [
    BusinessFilterPage
  ]
})
export class BusinessFilterPageModule {}
