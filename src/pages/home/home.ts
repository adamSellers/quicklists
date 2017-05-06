import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform } from 'ionic-angular';
import { ChecklistModel } from '../../models/checklist-model';
import { Data } from '../../providers/data';
import { Keyboard } from '@ionic-native/keyboard';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //create any required properties for the class
  checklists: ChecklistModel[] = [];

  constructor(public navCtrl: NavController, public dataService: Data, public alertCtrl:
  AlertController, public platform: Platform, public keyboard:Keyboard) {

  }

  ionViewDidLoad() {
    //grab the data from storage here
    this.platform.ready().then(() => {
      this.dataService.getData().then((checklists) => {

        let savedChecklists: any = false;
        if (typeof(checklists) != "undefined") {
          savedChecklists = JSON.parse(checklists);
        }

        if (savedChecklists) {
          savedChecklists.forEach((savedChecklist) => {

            let loadChecklist = new ChecklistModel(savedChecklist.title, savedChecklist.items);
            this.checklists.push(loadChecklist);

            loadChecklist.checklistUpdates().subscribe(update => {
              this.save();
            });

          });
        }

      });
    });
  }

  addChecklist(): void {
    let prompt = this.alertCtrl.create({
      title: 'New Checklist',
      message: 'Please enter the name of your checklist',
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
            let newChecklist = new ChecklistModel(data.name, []);
            this.checklists.push(newChecklist);

            newChecklist.checklistUpdates().subscribe(update => {
              this.save();
            });

            this.save();
          }
        }
      ]
    });

    prompt.present();
  }

  renameChecklist(checklist): void {
    let prompt = this.alertCtrl.create({
      title: 'Rename Checklist',
      message: 'Enter the new name of your checklist',
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
            let index = this.checklists.indexOf(checklist);

            if (index > -1) {
              this.checklists[index].setTitle(data.name);
            }
          }
        }
      ]
    });
    prompt.present();
  }

  viewChecklist(checklist): void {

    this.navCtrl.push('Checklist', {
      checklist: checklist
    });

  }

  deleteChecklist(checklist): void {

    let index = this.checklists.indexOf(checklist);

    if (index > -1) {
      this.checklists.splice(index, 1);
      this.save();
    }

  }

  save(): void {

    this.keyboard.close();
    this.dataService.save(this.checklists);

  }

}
