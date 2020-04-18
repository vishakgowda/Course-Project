import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]=[
   new Ingredient('Apples',5),
   new Ingredient('tommatos',4)
  ];
  constructor() { }

  ngOnInit() {
  }

  oningredientAdded(ingredient){
    let indexx = this.ingredients.findIndex(x => x.name == ingredient.name)
    if(indexx=== -1){
      this.ingredients.push(ingredient)
    }
    else{
        alert('Duplicate Entry');
    }
  }

  onEdit(){

  }

}
