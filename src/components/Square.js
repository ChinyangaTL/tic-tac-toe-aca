import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as XOutline } from '../images/icons/icon-x-outline.svg';
import { ReactComponent as OOutline } from '../images/icons/icon-o-outline.svg';
import { ReactComponent as X } from '../images/icons/icon-x.svg';
import { ReactComponent as O } from '../images/icons/icon-o.svg';

const Square = ({ cellIdx, cellAction, currentPlayer, currentCells }) => {
  const [isSquareClicked, setSquareIsClicked] = useState(false);

  let buttonShadow = '';
  let buttonWidth = '';
  let buttonHoverEffect = '';
  if (isSquareClicked) {
    buttonShadow = '0px 2px 2px 0px';
    buttonWidth = 'scale(0.98) translate(0, 5px)';
    buttonHoverEffect = 'none';
  } else {
    buttonShadow = '0px 14px 10px 0px rgba(0, 0, 0, 0.75)';
  }

  const handleClick = (idx) => {
    setSquareIsClicked(true);
    if (isSquareClicked) {
      alert('You cannot click the same square twice');
      return;
    }
    cellAction(idx);
  };

  return (
    <Button
      style={{
        boxShadow: buttonShadow,
        transform: buttonWidth,
        pointerEvents: buttonHoverEffect,
      }}
      type="button"
      onClick={() => handleClick(cellIdx)}
    >
      {currentPlayer === 'x' ? (
        <XOutline className="x-outline" />
      ) : (
        <OOutline className="o-outline" />
      )}
      {currentCells[cellIdx] === 'x' && <X />}
      {currentCells[cellIdx] === 'o' && <O />}
    </Button>
  );
};

const Button = styled.button`
  width: 125px;
  height: 125px;
  background-color: var(--clr-btn-primary);
  margin: 1rem;
  border-radius: var(--radius);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .x-outline,
  .o-outline {
    display: none;
  }

  :hover {
    .x-outline,
    .o-outline {
      display: block;
    }
  }

  :active,
  :focus {
    .x-outline,
    .o-outline {
      display: none;
    }
  }

  :disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
`;

export default Square;
