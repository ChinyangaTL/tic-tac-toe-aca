import React, { useState } from 'react';
import styled from 'styled-components';
import Square from './Square';

const Board = ({ currentPlayer, changePlayer }) => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const handleCellClick = (value) => {
    currentPlayer === 'x' ? changePlayer('o') : changePlayer('x');
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
          />
        );
      })}
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default Board;
