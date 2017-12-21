import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageFuckOnePage } from './page-fuck-one';

@NgModule({
  declarations: [
    PageFuckOnePage,
  ],
  imports: [
    IonicPageModule.forChild(PageFuckOnePage),
  ],
  exports:[
    PageFuckOnePage
  ]
})
export class PageFuckOnePageModule {}
