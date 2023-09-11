import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../service/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit{
  public product : any=[]

  constructor(private WatchlistService : WatchlistService){}
  
  
  ngOnInit(): void {
    this.WatchlistService.getProducts()
    .subscribe(res=>{
      this.product=res;
      console.log(this.product)
    })
   
  }
  getProduct() {
    throw new Error('Method not implemented.');
  }
  getWatchlist() {
    throw new Error('Method not implemented.');
  }
  removemovie(item: any ){
    this.WatchlistService.removeWatchlistlist(item);
  }
  emptywatchlist(){
    this.WatchlistService.removeAllWatchlist();
  }
}
