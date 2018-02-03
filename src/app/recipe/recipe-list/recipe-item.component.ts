import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from 'app/recipe/recipe.model';
import { Input,  Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.recipeSelected.emit(this.recipe);
  }

}
