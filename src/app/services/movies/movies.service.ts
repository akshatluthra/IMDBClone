import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string = "http://localhost:3000/categories";

  constructor(private http: HttpClient) { }

  getMoviesData(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getMovieData(id:string): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
}
