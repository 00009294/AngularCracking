import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  password = "Tuna";
  isDisplayed: boolean = false;
  numberOfClicked: number = 0;
  allClickedText: any= [];

  showDetails(){
    this.isDisplayed = true;
    this.numberOfClicked++;
    
    this.allClickedText.push(this.numberOfClicked);
  }
  
  showOverall(){
    return this.numberOfClicked;
  }

  showAllClickedText(){
    return this.allClickedText;
  }

  setColor(){
    return this.numberOfClicked > 5 ? 'green' : 'red';
  }
}
