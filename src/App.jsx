import { useState } from "react";
import Board from "./components/Board";

export default function App(){

  const [gameHistory, setGameHistory] = useState(new Array(new Array(9).fill("")))
  function handleSquareClick(squareId, value){
    if(value==''){
        let len = gameHistory.length;
        let currentBoard = [...gameHistory[len-1]];
        let currentHistory = [...gameHistory];
        if(len%2==1) currentBoard[squareId] = 'X';
        else currentBoard[squareId] = 'O';
        currentHistory.push(currentBoard);
        setGameHistory(currentHistory);
    }
  }
  
  function moveBtnClicked(index){
    setGameHistory(gameHistory.slice(0,index+1))
  }

  return (
    <div className="wrapper">
      <div className="turnMsg">It is your turn {gameHistory.length%2==1? 'X': 'O'}</div>
      <Board handleSquareClick={handleSquareClick} gameHistory={gameHistory}/>
      {gameHistory.slice(0,gameHistory.length-1).map((element, index)=>{
        return <button key={index} onClick={() => moveBtnClicked(index)}>Go to move {index==0?"Start" :index + 1}</button>
      }
      )}
    </div>   
  )
}