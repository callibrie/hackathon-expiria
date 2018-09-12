import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { ManualAddPage } from '../manual-add/manual-add';
import { CameraAddPage } from '../camera-add/camera-add';

import { Camera, PictureSourceType } from '@ionic-native/camera';
import * as Tesseract from 'tesseract.js'
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  selectedImage: string;
  imageText: string;

  constructor(public navCtrl: NavController, private camera: Camera, private actionSheetCtrl: ActionSheetController, public progress: NgProgress) {
  }

  selectSource() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Use Library',
          handler: () => {
            this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }, {
          text: 'Capture Image',
          handler: () => {
            this.getPicture(this.camera.PictureSourceType.CAMERA);
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  getPicture(sourceType: PictureSourceType) {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then((imageData) => {
      this.selectedImage = `data:image/jpeg;base64,${imageData}`;
      this.recognizeImage();
    });
  }

  recognizeImage() {
    this.imageText = "Please Wait." ;
    Tesseract.recognize(this.selectedImage)
      .progress(message => {
        if (message.status === 'recognizing text')
          this.progress.set(message.progress);
      })
      .catch(err => console.error(err))
      .then(result => {
        this.imageText = result.text;
      })
      .finally(resultOrError => {
        this.progress.complete();
        this.goToCameraAdd({
          image: this.selectedImage,
          text: this.imageText
        })
      });
  }

  goToManualAdd(params){
    if (!params) params = {};
    this.navCtrl.push(ManualAddPage);
  }goToAddItem(params){
    if (!params) params = {};
    this.navCtrl.push(AddItemPage);
  }goToCameraAdd(params){
    if (!params) params = {};
    this.navCtrl.push(CameraAddPage, params);
  }

}
