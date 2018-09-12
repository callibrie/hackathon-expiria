import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ManualAddPage } from '../manual-add/manual-add';
import { CameraAddPage } from '../camera-add/camera-add';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToManualAdd(params){
    if (!params) params = {};
    this.navCtrl.push(ManualAddPage);
  }goToAddItem(params){
    if (!params) params = {};
    this.navCtrl.push(AddItemPage);
  }goToCameraAdd(params){
    if (!params) params = {};
    this.navCtrl.push(CameraAddPage);
  }
}
