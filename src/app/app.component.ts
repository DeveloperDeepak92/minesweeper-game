import { Component } from '@angular/core';
import { GameBoard } from './gameBoard';
import { GameCell } from './gameCell';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'minesweeper-game';
  board: GameBoard;
  constructor() {
    this.reset();
  }

  checkCell(cell: GameCell) {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      alert('You lose');
    } else if (result === 'win') {
      alert('you win');
    }
  }
  flag(cell: GameCell) {
    if (cell.status === 'flag') {
      cell.status = 'open';
    } else {
      cell.status = 'flag';
    }
  }

  reset() {
    this.board = new GameBoard(20, 50);
  }
}
