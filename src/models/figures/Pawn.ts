import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, figures } from "../Figure";

export class Pawn extends Figure {
  constructor(base: Cell, color: Colors) {
    super(
      base,
      figures.PAWN,
      color,
      color === Colors.BLACK
        ? "./assets/pawn-black.png"
        : "./assets/pawn-white.png"
    );
  }
  public canMove() {
    this.cell.board.pawnMove(this.cell);
  }
}
