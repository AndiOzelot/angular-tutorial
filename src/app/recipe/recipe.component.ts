import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'app/recipe/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styles: [],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
