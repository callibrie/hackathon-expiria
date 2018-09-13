import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-items-list',
  templateUrl: 'items-list.html'
})
export class ItemsListPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public localNotifications: LocalNotifications) {
    this.startNotification();
  }

  // delayedNotification(){
  //   this.localNotifications.schedule({
  //     text: 'Delayed ILocalNotification',
  //     trigger: {at: new Date(new Date().getTime() + 3600)},
  //     led: 'FF0000',
  //     sound: null
  //   });
  // }

  startNotification(){
    this.localNotifications.schedule([{
      id: 1,
      title: "Notif 1",
      text: 'Multi ILocalNotification 1',
      icon: 'resources/icon.png',
      trigger: {at: new Date(new Date().getTime() + 60000)},
    },{
      id: 2,
      title: 'Notif 2',
      text: 'Multi ILocalNotification 2',
      icon: 'resources/icon.png',
      trigger: {at: new Date(new Date().getTime() + 80000)},
    }]);

  }
}
