import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetrieveDataPage } from './retrieve-data';

@NgModule({
  declarations: [
    RetrieveDataPage,
  ],
  imports: [
    IonicPageModule.forChild(RetrieveDataPage),
  ],
  exports: [
    RetrieveDataPage
  ]
})
export class RetrieveDataPageModule {}
