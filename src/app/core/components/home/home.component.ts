import { Component, OnInit } from '@angular/core';
import { faOtter } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newMoviesList: Array<{}>;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
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
        items: 4
      }
    },
  }
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getNewMovies();
  }

  getNewMovies(): void {
    this.sharedService.getNewMoviesInTheYear().subscribe((movies: Array<{}>) => {
      this.newMoviesList = movies;
      this.newMoviesList.forEach(main => {
        // To get Thumbnail for every movie.
        this.sharedService.getMovie(main['id']).subscribe(res => {
          main['thumbnail'] = res['thumbnail']['backdrops'].slice(0,3);
        })
      })
    })
  }


  
  navigateToMovie(id){

  }
}
