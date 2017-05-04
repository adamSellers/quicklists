/**
 * Home module file
 * AS 040517
 * v0.1
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage} from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})

export class HomePageModule {}
