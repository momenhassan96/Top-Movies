import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgSrc'
})
export class ImgSrcPipe implements PipeTransform {
    // To add Corect path to get Images
  transform(value: string): string {
    let newSrcImg = `https://image.tmdb.org/t/p/w500${value}`;
    return newSrcImg;
  }

}
