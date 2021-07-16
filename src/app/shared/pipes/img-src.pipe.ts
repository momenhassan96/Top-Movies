import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgSrc'
})
export class ImgSrcPipe implements PipeTransform {

  transform(value: string): string {
    let newSrcImg = `https://image.tmdb.org/t/p/w500${value}`;
    return newSrcImg;
  }

}
