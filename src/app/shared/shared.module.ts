import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './services/shared.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImgSrcPipe } from './pipes/img-src.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    ImgSrcPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CarouselModule 
  ],
  exports:[
    FontAwesomeModule,
    ImgSrcPipe,
    CarouselModule 
  ],
  providers:[
    SharedService
  ]
})
export class SharedModule { }
