import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecFriendsPage } from './rec-friends';

@NgModule({
  declarations: [
    RecFriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecFriendsPage),
  ],
})
export class RecFriendsPageModule {}
