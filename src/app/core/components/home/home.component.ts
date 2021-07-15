import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
  ];
  imagesSlider = {
    speed:300,
    slidesToShow:1,
    slidesToScroll:1,
    fade:true,
    // prevArrow:'.main-img .prev-arrow',
    // nextArrow:'.main-img .next-arrow',
    asNavFor:".thumbs",
  };
  thumbnailsSlider = {
    speed:300,
    slidesToShow:3,
    slidesToScroll:1,
    focusOnSelect:true,
    asNavFor:".main",
    // prevArrow:'.thumbnails-carousel .prev-arrow',
    // nextArrow:'.thumbnails-carousel .next-arrow',
  };

}
