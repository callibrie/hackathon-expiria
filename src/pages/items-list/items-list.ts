import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-items-list',
  templateUrl: 'items-list.html'
})
export class ItemsListPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  expireDatas: any;
  toNotify: any;

  constructor(public navCtrl: NavController, public localNotifications: LocalNotifications, public restProvider: RestProvider) {
    this.getExpiryDatas();
    this.getToNotify();
  }

  getExpiryDatas() {
    this.restProvider.getExpiryDatas()
    .then(data => {
      console.log(this.expireDatas);
      this.expireDatas = data;
    });
  }

  getToNotify(){
    this.restProvider.getExpiryToNotify()
      .then(data => {
        this.toNotify = data;
        this.startNotification();
      });
  }
  startNotification(){

    this.localNotifications.schedule([{
      id: 1,
      title: 'Your ' + this.toNotify[0].category + ' will expire soon!',
      text: this.toNotify[0].message,
      icon: 'icon.png',
      trigger: {at: new Date(new Date().getTime() + 60000)},
    }]);

  }
}
