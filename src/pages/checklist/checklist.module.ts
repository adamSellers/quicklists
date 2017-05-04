import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Checklist } from './checklist';

@NgModule({
  declarations: [
    Checklist,
  ],
  imports: [
    IonicPageModule.forChild(Checklist),
  ],
  exports: [
    Checklist
  ]
})
export class ChecklistModule {}
