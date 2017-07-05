import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabStore } from '../../state/TabStore';

// import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private tabStore: TabStore,
  ) {
  }

  gotoAddPostPage() {
    // this.navCtrl.setRoot(TabsPage)
    // this.navCtrl.push('AddPostPage');
    this.tabStore.update(1);
  }
}
