/* eslint-disable react/prop-types */
import Square from "./Square";

// eslint-disable-next-line react/prop-types
export default function Board({gameHistory, handleSquareClick}) {
    return (       
        <div className="board">
            {gameHistory[gameHistory.length-1].map((element, index) => (
                <Square key={index} squareId={index} value={element} handleSquareClick={handleSquareClick}/>
            ))}
        </div>
    );
}
