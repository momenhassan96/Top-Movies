import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  newFourMovies = new Subject();
  topRatedMovies = new Subject();
  movieDetail = new Subject();

  constructor(private http: HttpClient) { }

  // Function to get New Movies
  getNewMoviesInTheYear():Observable<any> {
    const getYear = new Date().getFullYear().toString();
    const options = {
      params: {
        year: getYear,
      }
    }
    this.http.get(`discover/movie`, options).subscribe(
      res => {
        if (res['results']) {
          // To get last 4 New Movies
          this.newFourMovies.next(res['results'].slice(0, 4))
        }
      },
      err => console.error('Http Error:' + err.error.status_message)
    )
    return this.newFourMovies.asObservable();
  }

  // Function To get Thumbnail for every movie.
  getMovie(id: Number):Observable<any> {
    return forkJoin({
      thumbnail: this.http.get(`movie/${id}/images`),
    })
  }


  // Fuction To get Top Rated Movies
  getTopRated():Observable<any>{
    this.http.get(`movie/top_rated`).subscribe(res=>{
      if(res['results']){
        this.topRatedMovies.next(res['results'].slice(0,9));
      }
    },
    err => console.error('Http Error:' + err.error.status_message)
    )
    return this.topRatedMovies.asObservable();
  }


  getMovieById(movie_id){
    this.http.get(`/movie/${movie_id}`).subscribe(res=>{
      if(res){
        this.movieDetail.next(res);
      }
    },
    err => console.error('Http Error:' + err.error.status_message)
    )
    return this.movieDetail.asObservable();
  }


}
