import { Component } from '@angular/core';

import { TabStore } from '../../state/TabStore';

import { HomePage } from '../home/home';
import { PostsPage } from '../posts/posts';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  public index: number = 0;

  tab1Root = HomePage;
  tab3Root = PostsPage;

  constructor(private tabStore: TabStore) {
    this.tabStore.index.subscribe((value) => {
      console.log('index', value)
      this.index = value;
    });
  }
}
