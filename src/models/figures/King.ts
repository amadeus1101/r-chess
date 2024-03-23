import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, figures } from "../Figure";

export class King extends Figure {
  constructor(base: Cell, color: Colors) {
    super(
      base,
      figures.KING,
      color,
      color === Colors.BLACK
        ? "./assets/king-black.png"
        : "./assets/king-white.png"
    );
  }
  public canMove() {
    this.cell.board.kingMove(this.cell);
  }
}
