import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CreateNewNotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-new-note',
  templateUrl: 'create-new-note.html',
})
export class CreateNewNotePage {

  newNote = { title: '', message: '' }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNewNotePage');
  }

  dismiss(isCancel){
    if(isCancel){
      this.viewCtrl.dismiss( { isCancel:true });
    } else {
      this.viewCtrl.dismiss( { isCancel:false, data: this.newNote });
    }
  }


}
