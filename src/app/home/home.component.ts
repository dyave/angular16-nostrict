import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fontColor = 'blue';
  customText = "this is my custom text!";
  className = "my-class";
  canClick = true;
  count = 0;
  message = "hey: ";
  forCount = Array(5).fill(5).map((x,i)=>i); // [0,1,2,3,4]
  canEdit = true;


  sayMessage() {
    this.count++;
    this.canEdit = !this.canEdit;
    alert(this.message + this.count);
  }
}
