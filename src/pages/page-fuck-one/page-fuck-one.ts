import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HomePage } from '../home/home';

/**
 * Generated class for the PageFuckOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-fuck-one',
  templateUrl: 'page-fuck-one.html',
})
export class PageFuckOnePage {

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageFuckOnePage');
  }

  goHome(){
    this.navCtrl.push('HomePage');
    console.log("Dafuq", this.navCtrl.getViews.toString);
  }

  rootUp(){
    this.navCtrl.setRoot('PageFuckOnePage');    
  }

  rootHome(){
    this.navCtrl.setRoot('HomePage');    
  }

}
