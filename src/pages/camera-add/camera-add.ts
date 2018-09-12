import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ManualAddPage } from '../manual-add/manual-add';

@Component({
  selector: 'page-camera-add',
  templateUrl: 'camera-add.html'
})
export class CameraAddPage {

  selectedImage: string;
  imageText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedImage = navParams.get('image');
    this.imageText = navParams.get('text');
  }
  
  goToAddItem(params){
    if (!params) params = {};
    this.navCtrl.push(AddItemPage);
  }goToManualAdd(params){
    if (!params) params = {};
    this.navCtrl.push(ManualAddPage);
  }goToCameraAdd(params){
    if (!params) params = {};
    this.navCtrl.push(CameraAddPage);
  }
}
