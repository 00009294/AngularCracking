import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  description!: string;

  message = "";

  sendDesc(): string{
    this.description = 'New Description from parent';

    return this.description;
  }



}