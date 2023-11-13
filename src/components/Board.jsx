/* eslint-disable react/prop-types */
import { useState } from "react";
import Square from "./Square";

// eslint-disable-next-line react/prop-types
export default function Board({xTurn, setXTurn, movesBtns, setMovesBtns, squaresValues, setSquaresValues}) {
    // eslint-disable-next-line no-unused-vars

    const [order, setOrder] = useState(0);
    const [values, setValues] = useState(new Array(9).fill(""));
    
    function handleClick(id){
        console.log("item", id, "clicked");
        let tmpValues = [...values];
        console.log("tmpValues issss", tmpValues);
        if(xTurn) tmpValues[id] = 'X';
        else tmpValues[id] = 'O';
        let tmpSquareValues = [...squaresValues];
        setSquaresValues(tmpSquareValues.map(element=>{
            if(element.id==id){
                return {id: id, filled: true, value: tmpValues[id]}
            }else return element;
        })) 
        setMovesBtns([...movesBtns, {order: order, squareId: id, value: tmpValues[id]}])
        console.log("moveBtns is", movesBtns);
        setOrder(order+1);
        setXTurn(!xTurn);
        setValues(tmpValues);

    }
    return (       
        <div className="board">
            {squaresValues.map((element) => (
                <Square key={element.id} squareId={element.id} value={element.value} filled={element.filled} squareClickedHandler={()=>handleClick(element.id)}/>
            ))}
        </div>
    );
}
