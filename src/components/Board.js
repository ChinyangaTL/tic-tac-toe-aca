import React, { useState } from 'react';
import styled from 'styled-components';
import Square from './Square';
import { checkForWinner } from '../utils.js';
import Modal from './Modal';
import { useAppContext } from '../context/context';

const Board = ({ changePlayer }) => {
  const {
    currentPlayer,
    changeCurrentPlayer,
    squares,
    updateSquares,
    winningPlayer,
    checkForWinningPlayer,
  } = useAppContext();
  // const [squares, setSquares] = useState(Array(9).fill(''));
  // const [winningPlayer, setWinningPlayer] = useState(null);

  const handleCellClick = (idx) => {
    const winner = checkForWinningPlayer(squares);
    console.log(winner);
    // if (winner) {
    //   setWinningPlayer(winner);
    //   return;
    // }
    const grid = [...squares];
    checkForWinner(grid);
    grid[idx] = currentPlayer;
    updateSquares(grid);
    changeCurrentPlayer(currentPlayer);
    // currentPlayer === 'x' ? changePlayer('o') : changePlayer('x');
    return;
  };

  const restartGame = () => {
    updateSquares(Array(9).fill(''));
    // setWinningPlayer(null);
    changePlayer('x');
  };

  checkForWinner(squares);

  return (
    <BoardWrapper>
      {squares.map((square, index) => {
        return (
          <Square
            key={index}
            cellIdx={index}
            cellAction={handleCellClick}
            currentPlayer={currentPlayer}
            currentCells={squares}
            // hasWinner={winner}
          />
        );
      })}
      <Modal restartGame={restartGame} />
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;
`;

export default Board;
