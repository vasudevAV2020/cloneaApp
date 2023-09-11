import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  // getMostPopularMovies(page: number): Observable<any> {
  //   const url = `https://www.episodate.com/api/most-popular?page=${page}`;
  //   return this.http.get(url);
  // }
  private url = "https://www.episodate.com/api/most-popular?page=1"
  getMostPopularMovies(): Observable<any[]>{
     return this.http.get<any[]>(this.url);
  }
  add_to_watchlist(){
    
  }
}
