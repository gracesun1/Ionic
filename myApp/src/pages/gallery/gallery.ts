import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PictureDetailPage } from "../picturedetail/picturedetail"

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {
  Items = [];

  constructor(public navCtrl: NavController) {
    this.Items.push({
      imgsrc: "love.jpg",
      city: "Shanghai",
      date: "2015/6/1"
    },
      {
        imgsrc: "xiamen.jpg",
        city: "Xiamen",
        date: "2015/2/14"
      },
      {
        imgsrc: "shenzhen.jpg",
        city: "Shenzhen",
        date: "2015/6/1"
      },
      {
        imgsrc: "sanya.jpg",
        city: "Sanya",
        date: "2015/6/1"
      },
      {
        imgsrc: "dubai.jpg",
        city: "Dubai",
        date: "2017/6/1"
      }
    )

  }
  openPictureDetailsPage(item) {
    this.navCtrl.push(PictureDetailPage, { item: item });
  }

}
