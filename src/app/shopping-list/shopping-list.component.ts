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
  showEdit =false;
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

  onDelete(i){
    this.ingredients.splice(i,1)
  }

  ingInfo: any = {};


   myValue;

  editIng(editIng) {
    this.ingInfo.name = this.ingredients[editIng].name;
    this.ingInfo.amount = this.ingredients[editIng].amount;
    this.myValue = editIng;
    this.showEdit = true;
  }

  updateIng() {
    let editIng = this.myValue;
    for (let i = 0; i < this.ingredients.length; i++) {
      if (i == editIng) {
        this.ingredients[i] = this.ingInfo;
        this.ingInfo = {};
      }
    }
  }

}
