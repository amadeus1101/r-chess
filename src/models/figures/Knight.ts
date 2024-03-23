import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, figures } from "../Figure";

export class Knight extends Figure {
  constructor(base: Cell, color: Colors) {
    super(
      base,
      figures.KNIGHT,
      color,
      color === Colors.BLACK
        ? "./assets/knight-black.png"
        : "./assets/knight-white.png"
    );
  }
  public canMove() {
    this.cell.board.knightMove(this.cell);
  }
}
