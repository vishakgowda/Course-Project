import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {

  recipes: Recipe[] = [

    new Recipe('A test recipe', 'test', 'https://as1.ftcdn.net/jpg/02/05/24/24/500_F_205242483_vVLU1ahNhiqDuk9bMfGrjLvhuMSOuZ0g.jpg'),
    new Recipe('Another test', 'test', 'https://as2.ftcdn.net/jpg/00/82/01/31/500_F_82013132_iBa6aHWRMJrJi8Km7LWwCxIygJojuhTS.jpg')

  ];

  getRecipe(){
    return this.recipes.slice();//Adding slice - we can not change this array from outside
  }
}
