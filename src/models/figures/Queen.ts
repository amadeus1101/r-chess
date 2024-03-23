import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, figures } from "../Figure";

export class Queen extends Figure {
  constructor(base: Cell, color: Colors) {
    super(
      base,
      figures.QUEEN,
      color,
      color === Colors.BLACK
        ? "./assets/queen-black.png"
        : "./assets/queen-white.png"
    );
  }
  public canMove() {
    this.cell.board.rookMove(this.cell);
    this.cell.board.bishopMove(this.cell);
  }
}
