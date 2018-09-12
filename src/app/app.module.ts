import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ItemsListPage } from '../pages/items-list/items-list';
import { AddItemPage } from '../pages/add-item/add-item';
import { SettingsPage } from '../pages/settings/settings';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { ManualAddPage } from '../pages/manual-add/manual-add';
import { CameraAddPage } from '../pages/camera-add/camera-add';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}