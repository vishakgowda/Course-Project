import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipes/recipe.model'
import { RecepieService } from './recepie.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers :[RecepieService]
})
export class RecipesComponent implements OnInit {
  selectedRecepie: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
