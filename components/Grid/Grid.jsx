import Card from "../Card/Card.jsx";
import { useState } from "react";
import "./Grid.css";
import CheckWinner from "../../helpers/CheckWinner.js";

function Grid({ noOfCards }) {
  const [board, setBoard] = useState(Array(noOfCards).fill(""));
  const[turn, setTurn] = useState(true);
  const[winner, setWinner] = useState(null);

  function play(index){
    if(turn == true){
      board[index] = "O";
    }
    else{
      board[index] = "X";
    }
    const winner = CheckWinner(board, turn ? "O" : "X");
    if(winner){
      setWinner(winner);
    }
    setBoard([...board]);
    setTurn(!turn);
  }

  function reset(){
    setBoard(Array(noOfCards).fill(""));
    setTurn(true);
    setWinner(null);
  }

  return (
    <div className="grid-wrapper">

      {
        winner && (
          <>
              <h1 className="fwinner"> Winner is  {winner}</h1>
          </>
        )
      }
      
      <h1 className="turn-highlight">Current turn: {(turn) ? 'O' : 'X'}</h1>
      <div className="grid">
        {board.map((el, idx) => (
          <Card key={idx} gameEnd={winner ? true : false} onPlay={play} player={el} index={idx} />
        ))}
      </div>
      <button className="reset" onClick={reset}> Reset Game </button>
    </div>
  );
}

export default Grid;
