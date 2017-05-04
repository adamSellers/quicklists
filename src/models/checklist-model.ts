/**
 * File to create the data model used in the checklist
 * app. This will be injected around the place
 * Stage - Initial Setup
 * AS 040517
 * v0.2
 */

export class ChecklistModel {

  checklist: any;
  checklistObserver: any;

  constructor(public title: string, public items: any[]) {

    this.items = items;

  }

  addItem(item) : void {

    this.items.push({
      title: item,
      checked: false
    });
  }

  removeItem(item) : void {
    let index = this.items.indexOf(item);

    if(index > -1) {
      this.items.splice(index, 1);
    }
  }

  renameItem(item, title): void {
    let index = this.items.indexOf(item);

    if(index > -1) {
      this.items[index].title = title;
    }
  }

  setTitle(title): void {
    this.title = title;
  }

  toggleItem(item): void {
    item.checked = !item.checked;
  }
}
