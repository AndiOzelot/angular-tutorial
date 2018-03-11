import { Recipe } from './recipe.model';
import { Ingredient } from 'app/shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    private recipes: Recipe[] = [
            new Recipe('Schnitzel', 'Sehr lecker', 'data:image/jpeg;base64,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', [ new Ingredient('Pommes', 10), new Ingredient('Schnitzel', 1)]),
            new Recipe('Salat', 'Auch lecker', 'data:image/jpeg;base64,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', [])

    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes(){
        return this.recipes;
    }
}