/* eslint-disable react/prop-types */

// import { useState } from "react";


// eslint-disable-next-line no-unused-vars
export default function Square({squareId, value, filled, squareClickedHandler}) {
    //const [filled, setFilled] = useState(false);
    function onClickHandler(){
        if(!filled){
        //     setFilled(true);
            squareClickedHandler();
        }     
    }
    return (
        <div className="square" onClick={onClickHandler}>
            {value}
        </div>
    );
}
