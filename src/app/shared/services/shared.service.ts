import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { 
    // this.getMovies();
  }

  getTopMoviesInTheYear():void{
    const data={
      params: {s: '2021', r: 'json'},
    }
    // this.http.get(`https://movie-database-imdb-alternative.p.rapidapi.com/`,data).subscribe(res=>{
    // })
    
  }

}
