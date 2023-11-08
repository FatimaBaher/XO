import { useState } from "react";
import Square from "./Square";

export default function Board() {
    // eslint-disable-next-line no-unused-vars
    const [values, setValues] = useState(new Array(9).fill(""));
    const [xTurn, setXTurn] = useState(true)
    function handleClick(i){
        console.log("item", i, "clicked");
        let tmpValues = [...values];
        console.log("tmpValues issss", tmpValues);
        if(xTurn) tmpValues[i] = 'X';
        else tmpValues[i] = 'O';
        setXTurn(!xTurn);
        setValues(tmpValues);
    }
    return (
        <div className="board">
            {new Array(9).fill(0).map((element, index) => (
                <Square key={index} value={values[index]} squareClickedHandler={()=>handleClick(index)}/>
            ))}
        </div>
    );
}
