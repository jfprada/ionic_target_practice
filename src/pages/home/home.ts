import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  skadoosh(event) { 
      console.log(event);
      console.log('KABOOM');
      //this.navCtrl.push('PageFuckOnePage');
      this.navCtrl.setRoot('PageFuckOnePage');
  }

}
