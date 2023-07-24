import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

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

  constructor(private loggerService: LoggerService) {
  }

  sayMessage() {
    this.count++;
    this.canEdit = !this.canEdit;
    alert(this.message + this.count);
    this.loggerService.logInfo(`The count is: ${this.count}`);
  }
}
