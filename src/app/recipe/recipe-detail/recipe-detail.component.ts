import { Component, OnInit } from '@angular/core';
import { Recipe } from 'app/recipe/recipe.model';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
