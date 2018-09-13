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
    this.startNotification();
  }

  getExpiryDatas() {
    this.restProvider.getExpiryDatas()
    .then(data => {
      this.expireDatas = data;
      console.log(this.expireDatas);
    });
  }

  startNotification(){
    this.restProvider.getExpiryToNotify()
      .then(data => {
        this.toNotify = data;
      });

    

    for (let entry of this.toNotify) {
      console.log(entry);

    }


    this.localNotifications.schedule([{
      id: 1,
      title: "Your item will expire soon!",
      text: '[item name] will expire in 2 days!',
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
