import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddElements: number[] = [];
  evenElements: number[] = [];

  onGameStarted(num: number) {
    if (num % 2 === 0) {
      this.evenElements.push(num);
    } else {
      this.oddElements.push(num);
    }
  }
}
