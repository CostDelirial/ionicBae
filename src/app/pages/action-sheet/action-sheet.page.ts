import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor( private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }
  onClick(){
    this.presentActionSheet();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      backdropDismiss: false,
      subHeader: 'Example subheader',
      buttons: [
        {
          text: 'Delete',
          icon: 'trash-outline',
          role: 'destructive',
          cssClass: 'rojo',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          icon: 'trash-outline',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

}
