import React from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import CellComponent from "./CellComponent";

interface IBoard {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<IBoard> = ({ board, setBoard }) => {
  console.log("Board renderring");
  const [selected, setSelected] = React.useState<Cell | null>(null);

  const selectCell = (target: Cell) => {
    const newBoard = board;
    if (selected) {
      if (
        selected.figure?.color === target.figure?.color ||
        selected.id === target.id
      ) {
        newBoard.highlightCells(target);
        setSelected(target);
      } else {
        newBoard.moveFigure(selected, target);
        newBoard.highlightCells(null);
        setSelected(null);
      }
    } else if (target.figure) {
      newBoard.highlightCells(target);
      setSelected(target);
    }
    setBoard(newBoard);
  };

  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cl) => (
            <CellComponent
              cell={cl}
              isSelected={cl.id === selected?.id ? true : false}
              setSelected={selectCell}
              key={cl.id}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
