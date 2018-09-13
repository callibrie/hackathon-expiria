import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { NgProgressModule } from '@ngx-progressbar/core';

import { ItemsListPage } from '../pages/items-list/items-list';
import { AddItemPage } from '../pages/add-item/add-item';
import { SettingsPage } from '../pages/settings/settings';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { ManualAddPage } from '../pages/manual-add/manual-add';
import { CameraAddPage } from '../pages/camera-add/camera-add';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    MyApp,
    ItemsListPage,
    AddItemPage,
    SettingsPage,
    TabsControllerPage,
    ManualAddPage,
    CameraAddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgProgressModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemsListPage,
    AddItemPage,
    SettingsPage,
    TabsControllerPage,
    ManualAddPage,
    CameraAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications
  ]
})
export class AppModule {}
