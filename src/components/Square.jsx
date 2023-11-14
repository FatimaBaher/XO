/* eslint-disable react/prop-types */
export default function Square({squareId, value, handleSquareClick}) {
    return (
        <div className="square" onClick={()=>handleSquareClick(squareId, value)}>
            {value}
        </div>
    );
}
