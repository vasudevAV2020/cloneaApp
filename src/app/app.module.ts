import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { WatchlistComponent } from './watchlist/watchlist.component';
import { MovieAppComponent } from './movie-app/movie-app.component';
import{ HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    
    WatchlistComponent,
         MovieAppComponent,
         FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
