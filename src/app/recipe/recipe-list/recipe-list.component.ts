import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, EventEmitter } from '@angular/core';

import { Recipe } from "../recipe.model";
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Sehr lecker', 'data:image/jpeg;base64,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', [ new Ingredient('Pommes', 10), new Ingredient('Schnitzel', 1)]),
    new Recipe('Salat', 'Auch lecker', 'data:image/jpeg;base64,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', [])
  ]
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
