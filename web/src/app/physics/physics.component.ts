import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-physics',
  templateUrl: './physics.component.html',
  styleUrls: ['./physics.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class PhysicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
