import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
public watchlistlist:any=[]
storedlist:any=[];
public watchlistshowlist = new BehaviorSubject<any>([]);
public search = new BehaviorSubject<string>(""); 
constructor() { }
  getProducts(){
    return this.watchlistshowlist.asObservable();
  }
  setProduct(product:any){
    this.watchlistlist.push(...product);
    this.watchlistshowlist.next(product);

  }
  addtowatchlist(product:any){
    this.storedlist.push(product);
    console.log("products",product)
    
    this.watchlistshowlist.next(this.addtowatchlist);
    
  }
  getTotalPrice() {
    let grandTotal =0;
    this.watchlistlist.map((a:any)=>{
      grandTotal +=a.total;
    })
  }
  removeWatchlistlist(product: any){
    this.watchlistlist.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.watchlistlist.splice(index,1);
      }
    })
  }
  removeAllWatchlist(){
    this.watchlistlist=[]
    this.watchlistshowlist.next(this.watchlistlist);
  }
}



