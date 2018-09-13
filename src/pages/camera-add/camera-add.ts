import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ManualAddPage } from '../manual-add/manual-add';
import { RestProvider } from '../../providers/rest/rest';
import { ItemsListPage } from '../items-list/items-list';

@Component({
  selector: 'page-camera-add',
  templateUrl: 'camera-add.html'
})
export class CameraAddPage {

  selectedImage: string;
  imageText: string;
  optionValue = '';
  item = { expiry_date:'', name:'', category:'' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
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

  saveExpiryDataItem() {
    this.item.category = this.optionValue;
    this.item.expiry_date = this.imageText;
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
