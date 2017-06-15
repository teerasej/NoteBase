import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewNotePage } from './create-new-note';

@NgModule({
  declarations: [
    CreateNewNotePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewNotePage),
  ],
  exports: [
    CreateNewNotePage
  ]
})
export class CreateNewNotePageModule {}
