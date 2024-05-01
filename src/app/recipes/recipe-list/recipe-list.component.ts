import { Component, OnInit } from '@angular/core';

import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Roasted and Stuffed Sweet Potatoes', 
    'This is a vegetarian friendly dinner recipe',
    'https://media.self.com/photos/5a316fd183ab3f54feacf768/master/pass/Roasted-pork.jpg')
  ];

  ngOnInit(): void {
      
  }
}
