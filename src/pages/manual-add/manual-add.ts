import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { CameraAddPage } from '../camera-add/camera-add';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-manual-add',
  templateUrl: 'manual-add.html'
})
export class ManualAddPage {
  optionValue = "";
  // this tells the tabs component which Pages
  // should be each tab's root Page
  // constructor(public navCtrl: NavController) {
  // }
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

  item = { expiry_date:'', name:'', category:'' };

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {}

  getExpiryDatas() {
    this.restProvider.getExpiryDatas()
    .then(data => {
      this.expiryDatas = data.expireDatas;
      console.log(this.expiryDatas);
    });
  }

  saveExpiryDataItem() {
    this.item.category = this.optionValue;
    this.restProvider.addExpiryDataItem(this.item).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
}
