import Card from "../Card/Card.jsx";
import { useState } from "react";
import './Grid.css';
function Grid({noOfCards}){
  const [board, setBoard] = useState(Array(noOfCards).fill(""));
  return(
    <div className="grid">
      { board.map((el, idx) => <Card key={idx}/> )}
    </div>
  );
}

export default Grid;