import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Class for the Data provider
  Stage - Initial Setup
  AS 040517
  v0.1
*/
@Injectable()
export class Data {

  constructor(public storage: Storage) {

  }

  getData(): Promise<any> {
    return this.storage.get('checklists');
  }

  save(data): void {

    //setup a function here that allows for either single or collections
    let saveData = [];

    data.forEach((checklist) => {

      saveData.push({
        title: checklist.title,
        items: checklist.items
      });
    });

    let newData = JSON.stringify(saveData);
    this.storage.set('checklists', newData);
  }

}
