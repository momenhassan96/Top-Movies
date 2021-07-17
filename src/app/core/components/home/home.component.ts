import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newMoviesList: Array<{}>;
  topRatedMovies: Array<{}>;
  customOptionsForNew: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    nav: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }
  customOptionsForTop: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 3
      }
    },
  }
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getNewMovies();
    this.getTopRated();
  }

  getNewMovies(): void {
    this.sharedService.getNewMoviesInTheYear().subscribe((movies: Array<{}>) => {
      this.newMoviesList = movies;
      this.newMoviesList.forEach(main => {
        // To get Thumbnail for every movie.
        this.sharedService.getMovie(main['id']).subscribe(res => {
          main['thumbnail'] = res['thumbnail']['backdrops'].slice(0, 3);
        })
      })
    })
  }

  getTopRated() {
    this.sharedService.getTopRated().subscribe(res => {
      this.topRatedMovies = res;
    })
  }

  changeMainPage(thumb,slide){
    slide.backdrop_path = thumb.file_path;
  }
}
