import { useState } from 'react';
import React from 'react';
import Square from './Square';

const Board = () => {
    const [board, changeBoard] = useState(Array(9).fill(null));
    const [isXTurn, setXTurn] = useState(true);

    const checkWinner = () => {
        // return 'Tie';
        const winnerProbability = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let winner of winnerProbability){
            const [a, b, c] = winner; 
            // console.log(board[a], board[b], board[c], board);
            if(board[a] !== null && board[a] === board[b] && board[a] === board[c]){
                return board[a];
            }
            // else return 'tie';
        }
        if(!board.includes(null)){
            return 'Tie';
        }

        return false;
    }

    const isWinner = checkWinner() === "Tie" ? "Match Tie" : `${checkWinner()} Won !!!`;
    // if(checkWinner()){
    //     const isWinner = checkWinner() === "Tie" ? "Match Tie" : `${checkWinner()} Won !!!`;
    // }
    // else{
    //     const isWinner = checkWinner();
    // }
    // console.log(isWinner);

    const handleBoardChange = (index) => {
        // console.log(index);
        const boardCopy = [...board];
        if(boardCopy[index] === null){
            boardCopy[index] = isXTurn ? "X" : "O" ;
            changeBoard(boardCopy);
            setXTurn(!isXTurn);
        }
    }
  return (
      <div className="board-container">
    {
        checkWinner() ? <h1>{isWinner} <br /> <button type="button" className="button" onClick={() => changeBoard(Array(9).fill(null))}>Play Again</button></h1> :
        <>
        <div className="board-row">
            <Square onClick={() => handleBoardChange(0)} value={board[0]} > 0</Square>
            <Square onClick={() => handleBoardChange(1)} value={board[1]} > 1</Square>
            <Square onClick={() => handleBoardChange(2)} value={board[2]} > 2</Square>
        </div>
        <div className="board-row">
            <Square onClick={() => handleBoardChange(3)} value={board[3]} > 3</Square>
            <Square onClick={() => handleBoardChange(4)} value={board[4]} > 4</Square>
            <Square onClick={() => handleBoardChange(5)} value={board[5]} > 5</Square>
        </div>
        <div className="board-row">
            <Square onClick={() => handleBoardChange(6)} value={board[6]} > 6</Square>
            <Square onClick={() => handleBoardChange(7)} value={board[7]} > 7</Square>
            <Square onClick={() => handleBoardChange(8)} value={board[8]} > 8</Square>
        </div>
        </>
    }
    </div>

  )
}

export default Board;