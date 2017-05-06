import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {assignImpl} from "rxjs/util/assign";
import {assertInterpolationSymbols} from "@angular/compiler/src/assertions";
import { ChecklistModel } from '../../models/checklist-model';
import { Data } from '../../providers/data';
/**
 * Generated class for the Checklist page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class Checklist {

  //create required properties for the class here
  checklist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, public dataService: Data) {

    //on class load, grab the checklist being passed in through NavParams
    this.checklist = this.navParams.get('checklist');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Checklist');
  }

  addItem(): void {

    let prompt = this.alertCtrl.create({
      title: 'Add new item',
      message: 'Please enter your checklist item',
      inputs: [
        {
          name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.checklist.addItem(data.name);
          }
        }
      ]
    });

    prompt.present();

  }

  renameItem(item): void {

    let prompt = this.alertCtrl.create({
      title: 'Rename Item',
      message: 'Enter new title',
      inputs: [
        {
          name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.checklist.renameItem(item, data.name);
          }
        }
      ]
    });

    prompt.present();

  }

  toggleItem(item): void {

    this.checklist.toggleItem(item);

  }

  removeItem(item): void {

    this.checklist.removeItem(item);

  }

  unCheckItems(): void {

    this.checklist.items.forEach((item) => {
      if(item.checked) {
        this.checklist.toggleItem(item);
      }
    });
  }





}
