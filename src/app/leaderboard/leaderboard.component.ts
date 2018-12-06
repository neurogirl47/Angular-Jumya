import { Component, OnInit } from '@angular/core';
import { Leader } from '../leader';
import { LEADERS } from '../mock-leaders';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})

export class LeaderboardComponent implements OnInit {

   leaderlist = LEADERS;


  constructor() { }

  ngOnInit() {
  }

}
