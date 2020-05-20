import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameTick = new EventEmitter<number>();
  interval;
  num = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.gameTick.emit(this.num);
      this.num++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
