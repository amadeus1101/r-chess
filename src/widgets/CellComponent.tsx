import { FC } from "react";
import { Cell } from "../models/Cell";

interface ICell {
  cell: Cell;
  isSelected: boolean;
  setSelected: (target: Cell) => void;
}
const CellComponent: FC<ICell> = ({ cell, isSelected, setSelected }) => {
  const style =
    "cell " +
    cell.color +
    (isSelected
      ? " selected"
      : cell.available
      ? cell.figure
        ? " enemy"
        : " available"
      : "");
  return (
    <div className={style} onClick={() => setSelected(cell)}>
      {cell.figure && <img src={cell.figure.icon} alt={cell.figure.title} />}
    </div>
  );
};

export default CellComponent;
