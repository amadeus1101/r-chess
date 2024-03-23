import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, figures } from "../Figure";

export class Rook extends Figure {
  constructor(base: Cell, color: Colors) {
    super(
      base,
      figures.ROOK,
      color,
      color === Colors.BLACK
        ? "./assets/rook-black.png"
        : "./assets/rook-white.png"
    );
  }
  public canMove() {
    this.cell.board.rookMove(this.cell);
  }
}
