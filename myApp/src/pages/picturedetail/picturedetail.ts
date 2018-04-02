import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-picturedetail',
  templateUrl: 'picturedetail.html'
})
export class PictureDetailPage {
  Item;
  constructor(public navCtrl: NavController, navParams: NavParams) {
    var obj = navParams.data.item;
    switch (obj.city) {
      case "Shanghai":
        this.Item = {
          img: "love.jpg",
          title: "Happy Birthday to You",
          description: "This distaff romantic tear jerker concerns a young couple who fall in love despite the objections of their families. Taken from Erich Segal's best selling novel, Jenny (Ali MacGraw) is the Radcliffe student of modest means who has worked hard to excel academically. Oliver Barrett IV (Ryan O'Neal) is the son of a wealthy but coldhearted father (Ray Milland)."
        };
        break;
      case "Shenzhen":
        this.Item = {
          img: "shenzhen.jpg",
          title: "Nice to meet you",
          description: "This distaff romantic tear jerker concerns a young couple who fall in love despite the objections of their families. Taken from Erich Segal's best selling novel, Jenny (Ali MacGraw) is the Radcliffe student of modest means who has worked hard to excel academically. Oliver Barrett IV (Ryan O'Neal) is the son of a wealthy but coldhearted father (Ray Milland)."
        };
        break;
        default:
        this.Item = {
          img: "sanya.jpg",
          title: "Happy New Year",
          description: "I was in the audience at Lane Tech College Prep on Tuesday covering the event. As a former special educator –and special education student — I watched with keen interest as Apple told their story around education. While Apple is targeting the mainstream, I came away with strong impressions on how Apple can make serious inroads in furthering special education as well."
        };
    }
  }

}
