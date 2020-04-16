import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recepiewasSelected = new EventEmitter<Recipe>()

   recipes:Recipe[] = [

     new Recipe('A test recipe', 'test','https://as1.ftcdn.net/jpg/02/05/24/24/500_F_205242483_vVLU1ahNhiqDuk9bMfGrjLvhuMSOuZ0g.jpg'),
     new Recipe('Another test', 'test','https://as2.ftcdn.net/jpg/00/82/01/31/500_F_82013132_iBa6aHWRMJrJi8Km7LWwCxIygJojuhTS.jpg')

   ];

  constructor() { }

  ngOnInit() {
  }
  onrecepieSelected(recipe:Recipe){
    this.recepiewasSelected.emit(recipe)


  }



}
