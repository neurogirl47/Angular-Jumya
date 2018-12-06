import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstadbannerComponent } from './adbanners/firstadbanner/firstadbanner.component';
import { SecondadbannerComponent } from './adbanners/secondadbanner/secondadbanner.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { GametilesComponent } from './gameboard/gametiles/gametiles.component';
import { ThequestionComponent } from './gameboard/gametiles/thequestion/thequestion.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstadbannerComponent,
    SecondadbannerComponent,
    LeaderboardComponent,
    GameboardComponent,
    GametilesComponent,
    ThequestionComponent,
  
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
