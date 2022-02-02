import React, { useState } from 'react';
import styled from 'styled-components';
import Square from './Square';
import { checkForWinner } from '../utils.js';
import Modal from './Modal';

const Board = ({ currentPlayer, changePlayer }) => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [winningPlayer, setWinningPlayer] = useState(null);

  const winner = checkForWinner(squares);

  const handleCellClick = (idx) => {
    if (winner) {
      setWinningPlayer(winner);
      return;
    }
    const grid = [...squares];
    grid[idx] = currentPlayer;
    setSquares(grid);
    currentPlayer === 'x' ? changePlayer('o') : changePlayer('x');
    return;
  };

  const restartGame = () => {
    setSquares(Array(9).fill(''));
    setWinningPlayer(null);
    changePlayer('x');
  };

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
            hasWinner={winner}
          />
        );
      })}
      <Modal hasWinner={winner} restartGame={restartGame} />
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
