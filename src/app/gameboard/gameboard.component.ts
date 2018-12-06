import { Component, OnInit } from '@angular/core';
import { Gamecategory } from '../gamecategory';
import { CATEGORIES } from '../mock-categories';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

	tempcat = CATEGORIES;

  constructor() { }

  ngOnInit() {
  }

}
