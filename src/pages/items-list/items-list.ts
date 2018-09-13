import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-items-list',
  templateUrl: 'items-list.html'
})
export class ItemsListPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  expireDatas: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getExpiryDatas();
  }

  getExpiryDatas() {
    this.restProvider.getExpiryDatas()
    .then(data => {
      this.expireDatas = data.expireDatas;
    });
  }

}
