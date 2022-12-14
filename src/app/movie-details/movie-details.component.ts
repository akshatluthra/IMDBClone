import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id: any
  movieDetailing:any;
  constructor( private readonly movieData: MoviesService, private readonly route: ActivatedRoute ) { }

  ngOnInit(): void {
    //fetching the id present in the URL
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      // console.log(this.id);
    })
    //fetching the data of that particular id
    this.movieData.getMovieData(this.id).subscribe(({
      next: (res) => {
        this.movieDetailing = res;
      },
      error: (err: Error) => {
        alert(err.message);
      }
    }))
      }
  }
  


