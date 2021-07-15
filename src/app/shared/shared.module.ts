import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedService } from './services/shared.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SlickCarouselModule,
  ],
  exports:[
    SlickCarouselModule
  ],
  providers:[
    SharedService
  ]
})
export class SharedModule { }
