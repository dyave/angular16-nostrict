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
  message = "hey - ";

  sayMessage() {
    this.count++;
    alert(this.message + this.count);
  }
}
