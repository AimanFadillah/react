import { useState } from 'react'

function Square ({value,onSquareClick}) {
  return <button onClick={onSquareClick} className='square' >{value}</button>
}

function Bord({xIsNext,squares,onPlay}) {

  function hadleClick(i) {
    if(squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    (xIsNext) ? nextSquares[i] = "X" : nextSquares[i] = "O";
    onPlay(nextSquares);
    console.log(nextSquares)
  }

  const winner = calculateWinner(squares);
  let status = "";
  winner ? status = `Winner: ${winner}` : status = `Next Player : ${ (xIsNext ? "X" : "O    ") } `;


  return (
    <>
      <div>{status}</div>
      <div className='bord'>
      {/* <Square value={squares[0]} onSquareClick={() => hadleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => hadleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => hadleClick(2)} />
      <Square value={squares[3]}  onSquareClick={() => hadleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => hadleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => hadleClick(5)} />
      <Square value={squares[6]} onSquareClick={() => hadleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => hadleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => hadleClick(8)} /> */}
      {squares.map( (value,i) => (
        <Square key={i} value={value} onSquareClick={() => hadleClick(i)} />
      ))}
    </div>
    </>
  )
} 

function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for(let i = 0;i < lines.length;i++){
    // const a = lines[i][0];
    // const b = lines[i][1];
    // const c = lines[i][2];
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[c] ){ 
      return squares[a];
    }
  }
  return false 
}

export default function Game () {
  const [history,setHistory] = useState([Array(9).fill(null)])
  const [currentMove,setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function jumpTo (nextMove) {
    setCurrentMove(nextMove);
  }

  
  function hadlePlay(nextSquares) {
    const nextHistory = [...history.slice(0,currentMove + 1),nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const moves = history.map((squares,move) => {
    let desc = "";
    (move > 0) ? desc = "Go to Move #" + move : desc = "Go to Game Start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)} >{desc}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-bord">
        <Bord xIsNext={xIsNext} squares={currentSquares} onPlay={hadlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}












