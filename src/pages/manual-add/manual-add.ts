import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemsListPage } from '../items-list/items-list';
import { CameraAddPage } from '../camera-add/camera-add';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-manual-add',
  templateUrl: 'manual-add.html'
})
export class ManualAddPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  // constructor(public navCtrl: NavController) {
  // }
  optionValue = '';

  item = { expiry_date:'', name:'', category:'' };

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {

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

  saveExpiryDataItem() {
    this.item.category = this.optionValue;
    console.log(this.item.name);
    let body = '&category='+this.item.category+'&expiry_date='+this.item.expiry_date+'&name='+this.item.name;
    this.restProvider.addExpiryDataItem(body).then((result) => {
      console.log(result);
      this.navCtrl.push(ItemsListPage);
      window.location.reload();
    }, (err) => {
      console.log(err);
    });
  }
}
