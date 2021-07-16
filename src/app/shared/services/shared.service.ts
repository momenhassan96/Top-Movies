import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  newFourMovies = new Subject();
  constructor(private http: HttpClient) { }

  // Function to get New Movies
  getNewMoviesInTheYear() {
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
  getMovie(id: Number) {
    return forkJoin({
      thumbnail: this.http.get(`movie/${id}/images`),
    })
  }


}
