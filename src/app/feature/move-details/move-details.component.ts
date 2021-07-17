import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-move-details',
  templateUrl: './move-details.component.html',
  styleUrls: ['./move-details.component.scss']
})
export class MoveDetailsComponent implements OnInit {
  movieDetail:Object = {};
  rate:number;
  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService) {
    this.getMovieById();
  }

  ngOnInit(): void {
  }

  getMovieById(): void {
    this.sharedService.getMovieById(this.activatedRoute.snapshot.params.id).subscribe(res => {
      this.movieDetail = res;
      // CALCULATE rate in IMDB
      this.rate =(this.movieDetail['vote_count']/(this.movieDetail['vote_count']+250))*this.movieDetail['vote_average']+(7.0/(this.movieDetail['vote_count']+250))*7.0;
    });
  }

}
