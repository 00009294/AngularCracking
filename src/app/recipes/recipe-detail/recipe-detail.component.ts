import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {

  @Input() desc!: string;
  
  message = "This child message that goes to parent by using output() ";
  
  @Output() messageEmitter = new EventEmitter<string>();

  sendMessage(){
    this.messageEmitter.emit(this.message);
  }

}
