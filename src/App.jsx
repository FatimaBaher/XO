import { useState } from "react";
import Board from "./components/Board";

export default function App(){

  function creatArray(){
    let arr = [];
    for(let i=0; i<9; i++){
      arr.push({squareId: i, filled: false, value: '', order: null});
    }
    return arr;
  }
  const [xTurn, setXTurn] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [order, setOrder] = useState(0);
  const [movesBtns, setMovesBtns] = useState([]);
  const [squaresValues, setSquaresValues] = useState(creatArray())

  function moveBtnClicked(index, orderL, squareId){
    console.log("index:", index, "squareId", squareId, "order:", orderL);
    setSquaresValues(()=>{return squaresValues.map(element=>
      (element.order!=null && element.order<order)? element: {squareId: element.squareId, filled: false, value: '', order:null}
    )})
    setOrder(orderL);

    // for(let start=order+1; start<movesBtns.length; start++){
    //   console.log("*** ", movesBtns);
    //   console.log("start:", start, "order:", order);
    //   let currentMoveBtn = movesBtns[start];
    //   let tmpSquareValues = [...squaresValues]
    //   tmpSquareValues[currentMoveBtn.squareId].filled = false;
    //   tmpSquareValues[currentMoveBtn.squareId].value = '';
    //   setSquaresValues(tmpSquareValues);
    // }
    setMovesBtns(movesBtns.slice(0, orderL+1))
  }

  return (
    <div className="wrapper">
      <div className="turnMsg">It is your turn {xTurn? 'X': 'O'}</div>
      <Board xTurn={xTurn} setXTurn={setXTurn} order={order} setOrder={setOrder} movesBtns={movesBtns} setMovesBtns={setMovesBtns} squaresValues={squaresValues} setSquaresValues={setSquaresValues}/>
      {movesBtns.map((element, index)=>{
        return <button key={index} onClick={() => moveBtnClicked(index,element.order, element.squareId)}>Go to move {index + 1}</button>
      }
      )}
    </div>
    
  )
}