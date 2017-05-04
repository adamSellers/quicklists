import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addChecklist() {
    console.log('checklist added');
  }

  renameChecklist(checklist) {
    console.log('checklist renamed!');
  }

  viewChecklist(checklist) {
    console.log('this one will be navigation');
  }

  deleteChecklist(checklist) {
    console.log('checklist deleted');
  }

}
