import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LandingPage} from './pages/landing';

import {PROVIDERS} from './app-providers';

import {TRANSITION_IN_KEY, TRANSITION_OUT_KEY} from './pages/custom-transition';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = LandingPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, PROVIDERS, {
  pageEnter: TRANSITION_IN_KEY,
  pageLeave: TRANSITION_OUT_KEY
});