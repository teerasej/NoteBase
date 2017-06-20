import { Component } from '@angular/core';
import { ModalController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes = [];

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {
  }

  openCreateNewNote(){
    let modal = this.modalCtrl.create('CreateNewNotePage');
    modal.present();

    modal.onDidDismiss(data => {
      if(!data.isCancel) {
        this.notes.push(data.data);
      } 
    });
  }

}
