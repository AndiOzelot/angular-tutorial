import { Input } from '@angular/core/src/metadata/directives';
import { Component, OnInit} from '@angular/core';
import { Recipe } from 'app/recipe/recipe.model';
import { RecipeService } from 'app/recipe/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
