import { Component, OnInit } from '@angular/core';
import { DrinkTypes } from '../enums/drinks';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: [],
  animations:[
    trigger('drinkClick', [
        state('pressed', style({
          backgroundColor: 'white'
        })),
      ]
    )
  ]
})
export class StoreComponent implements OnInit {

  public drinks = DrinkTypes;

  public isCliked:Boolean = false;

  constructor() { }

  ngOnInit() {

  }

  drinkSelected(drinks:DrinkTypes){
      this.isCliked = !this.isCliked;
      console.log("Drink clicked!"+ DrinkTypes[drinks]);
  }
}
