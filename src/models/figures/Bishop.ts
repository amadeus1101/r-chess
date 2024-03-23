import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, figures } from "../Figure";

export class Bishop extends Figure {
  constructor(base: Cell, color: Colors) {
    super(
      base,
      figures.BISHOP,
      color,
      color === Colors.BLACK
        ? "./assets/bishop-black.png"
        : "./assets/bishop-white.png"
    );
  }
  public canMove() {
    this.cell.board.bishopMove(this.cell);
  }
}
