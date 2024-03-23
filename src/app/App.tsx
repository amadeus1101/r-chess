import { useState } from "react";
import BoardComponent from "../widgets/BoardComponent";
import { Board } from "../models/Board";
import "./App.css";

function App() {
  const [board, setBoard] = useState(new Board());
  const restart = () => {
    const newBoard = new Board();
    setBoard(newBoard);
  };

  return (
    <div className="App">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
