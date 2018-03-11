import { Component, OnInit } from '@angular/core';
import { Recipe } from 'app/recipe/recipe.model';
import { RecipeService } from 'app/recipe/recipe.service';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {
 selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService, private sls: ShoppingListService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

  onAddToList() {
    this.sls.addIngredients(this.selectedRecipe.ingredients);
  }

}
