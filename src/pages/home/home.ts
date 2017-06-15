import { Component } from '@angular/core';
import {ModalController,  NavController} from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, private db: AngularFireDatabase, private modalCtrl: ModalController) {
     this.notes = db.list('/notes');
  }

  openCreateNote(){
    let modal = this.modalCtrl.create('CreateNewNotePage');
    modal.present();

    modal.onDidDismiss(data => {
      if(!data.isCancel) {
        this.notes.push(data.data);
      }
    });
  }

}
