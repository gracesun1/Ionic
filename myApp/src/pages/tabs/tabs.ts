import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { NotebookPage } from '../notebook/notebook';
import { HomePage } from '../home/home';
import { GalleryPage} from '../gallery/gallery';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = NotebookPage;
  tab4Root = GalleryPage;
  
  constructor() {

  }
}
