import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { WatchlistService } from '../service/watchlist.service';

@Component({
  selector: 'app-movie-app',
  templateUrl: './movie-app.component.html',
  styleUrls: ['./movie-app.component.css']
})
export class MovieAppComponent implements OnInit{
  userList:any=[];
  searchTerms: string = '';
  searchKey:string="";
  public searchTerm: string ='';
movie:any
  
 
  // WatchlistService: any;
  constructor(private httpClient:HttpClient,private movieservice:MovieService,private WatchlistService:WatchlistService){
  //   this.userList={}
  //     "id":Number,
  //     "name":String,
  //     "permalink":String,
  //     "start_date":Date,
  //     "end_date":Date,
  //     "country":String,
  // }];
  }
  
  
  ngOnInit(): void {
    // this.getUserList()
    this.movieservice.getMostPopularMovies().subscribe(
      (mov:any)=>{
this.movie=mov
console.log(mov.tv_shows[0].name)


      }
    )
    this.WatchlistService.search.subscribe(val=>{
      this.searchKey=val;
    })
    
  }
  
  addtowatchlist(user:any){
    this.WatchlistService.addtowatchlist(user);
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
  this.WatchlistService.search.next(this.searchTerm);
  }
  onSearch(): void {
    // Implement your search logic here, e.g., filter a list of items
    // For demonstration, we'll log the search term to the console.
    console.log('Search terms:', this.searchTerms);
  }

// getUserList(){
  
//   this.httpClient.get('https://www.episodate.com/api/most-popular?page=1').subscribe((result:any)=>
//   {
//     this.userList=result;
//     console.log(result)
//   })
// }
}

