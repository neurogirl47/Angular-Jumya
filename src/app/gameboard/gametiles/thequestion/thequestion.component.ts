import { Component, OnInit } from '@angular/core';
import { Question } from '../../../question';
import { QUESTION } from '../../../mock-question';

@Component({
  selector: 'app-thequestion',
  templateUrl: './thequestion.component.html',
  styleUrls: ['./thequestion.component.css']
})
export class ThequestionComponent implements OnInit {

	questionasked = QUESTION;

  constructor() { }

  ngOnInit() {


  }

}
