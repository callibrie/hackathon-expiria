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
  expiryDatas: any;
  toNotify: any;

  constructor(public navCtrl: NavController, public localNotifications: LocalNotifications, public restProvider: RestProvider) {
    this.getExpiryDatas();
    this.startNotification();
  }

  getExpiryDatas() {
    this.restProvider.getExpiryDatas()
      .then(data => {
        this.expiryDatas = data;
      });
  }

  startNotification(){
    this.restProvider.getExpiryToNotify()
      .then(data => {
        this.toNotify = data;
      });
    

    this.localNotifications.schedule([{
      id: 1,
      title: "Notif 1",
      text: 'Multi ILocalNotification 1',
      icon: 'icon.png',
      trigger: {at: new Date(new Date().getTime() + 60000)},
    },{
      id: 2,
      title: 'Notif 2',
      text: 'Multi ILocalNotification 2',
      icon: 'icon.png',
      trigger: {at: new Date(new Date().getTime() + 80000)},
    }]);

  }
}
