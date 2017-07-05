import { Component } from '@angular/core';

import { TabStore } from '../../state/TabStore';

import { HomePage } from '../home/home';
import { PostsPage } from '../posts/posts';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  index: number = 0;

  tab1Root = HomePage;
  tab2Root = PostsPage;

  constructor(private tabStore: TabStore) {
    this.tabStore.index.subscribe((value) => {
      console.log('index', value)
      this.index = value;
    });
  }

  getIndex() {
    return this.index;
  }
}
