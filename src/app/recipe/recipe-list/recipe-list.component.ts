import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import { Output } from '@angular/core/src/metadata/directives';
import { RecipeService } from 'app/recipe/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
