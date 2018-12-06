import { Component, OnInit } from '@angular/core';
import { Tile } from '../../tile';
import { TILEVALUES } from '../../mock-tiles';

@Component({
  selector: 'app-gametiles',
  templateUrl: './gametiles.component.html',
  styleUrls: ['./gametiles.component.css']
})

export class GametilesComponent implements OnInit {

	tiles = TILEVALUES;

  constructor() { }

  ngOnInit() {

   }

 

}
