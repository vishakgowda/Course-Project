import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
   recipes:Recipe[] = [

     new Recipe('A test recipe', 'test','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB17uQAmyoEOzNh6H1Ss4jfe6riZLXPx0SLxG1JfthgzwBtXsY&usqp=CAU'),
     new Recipe('A test recipe', 'test','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB17uQAmyoEOzNh6H1Ss4jfe6riZLXPx0SLxG1JfthgzwBtXsY&usqp=CAU')

   ];

  constructor() { }

  ngOnInit() {
  }

}
