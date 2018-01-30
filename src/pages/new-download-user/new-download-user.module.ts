import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewDownloadUserPage } from './new-download-user';

@NgModule({
  declarations: [
    NewDownloadUserPage,
  ],
  imports: [
    IonicPageModule.forChild(NewDownloadUserPage),
  ],
  exports: [
    NewDownloadUserPage
  ]
})
export class NewDownloadUserPageModule {}
