import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from '../services/movies/movies.service';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  faCircle = faPlayCircle;

  MovieData: any;
  subsription!:Subscription; 

  constructor(private apiData: MoviesService, private loader: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loader.show();
    setTimeout(()=> {
    this. subsription = this.apiData.getMoviesData().subscribe({
      next: (res) => {
        this.MovieData = res;
        this.loader.hide();
      },
      error: (err: Error) => {
        alert(err.message);
      },

    })
  },5000)
  }
  // ngOnDestroy(): void{
  //   this.subsription.unsubscribe();
  // }

}
