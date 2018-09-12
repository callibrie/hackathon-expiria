import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemsListPage } from '../items-list/items-list';
import { AddItemPage } from '../add-item/add-item';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ItemsListPage;
  tab2Root: any = AddItemPage;
  tab3Root: any = SettingsPage;
  constructor(public navCtrl: NavController) {
  }
  
}
