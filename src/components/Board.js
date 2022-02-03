import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Square from './Square';
import { checkForWinner } from '../utils.js';
import Modal from './Modal';
import { useAppContext } from '../context/context';

const Board = ({ changePlayer }) => {
  const { currentPlayer, changeCurrentPlayer, squares, updateSquares } =
    useAppContext();

  const handleCellClick = (idx) => {
    const grid = [...squares];
    grid[idx] = currentPlayer;
    updateSquares(grid);
    changeCurrentPlayer(currentPlayer);
    return;
  };

  const restartGame = () => {
    updateSquares(Array(9).fill(''));
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
