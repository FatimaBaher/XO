/* eslint-disable react/prop-types */


export default function Square({value, squareClickedHandler}) {
    return (
        <div className="square" onClick={squareClickedHandler}>
            {value}
        </div>
    );
}
