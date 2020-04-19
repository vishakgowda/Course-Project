import { Component, OnInit, ViewChild, ElementRef, EventEmitter,Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent  {
  onAdd = true;
  onUpdate = false;
  ingIndex;
  ingInfo: any = {};

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 3),
    new Ingredient('Orange', 4)
  ]

  oningredientAdded() {

    const newIngredient = new Ingredient(this.ingInfo.name, this.ingInfo.amount)

    let indexx = this.ingredients.findIndex(x => x.name == newIngredient.name)


    if (indexx === -1) {
      this.ingredients.push(newIngredient)
    }
    else {
      alert('Duplicate Entry');
    }
  }

  onEdit(i) {
    this.ingInfo.name = this.ingredients[i].name
    this.ingInfo.amount = this.ingredients[i].amount
    this.ingIndex = i
    this.onAdd = false;
    this.onUpdate = true;
  }

  updateIng() {
    let editIng = this.ingIndex;
    for (let i = 0; i < this.ingredients.length; i++) {
      if (i == editIng) {
        this.ingredients[i] = this.ingInfo;
        this.ingInfo = {};
      }
    }
    this.onAdd = true;
    this.onUpdate = false
  }

  onDelete(i) {
    this.ingredients.splice(i, 1)

  }

}
