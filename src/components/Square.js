import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as XOutline } from '../images/icons/icon-x-outline.svg';
import { ReactComponent as OOutline } from '../images/icons/icon-o-outline.svg';

const Square = ({ cellIdx, cellAction, currentPlayer }) => {
  const [isSquareClicked, setSquareIsClicked] = useState(false);

  let buttonShadow = '';
  let buttonWidth = '';
  if (isSquareClicked) {
    buttonShadow = '0px 2px 2px 0px';
    buttonWidth = 'scale(0.98) translate(0, 5px)';
  } else {
    buttonShadow = '0px 14px 10px 0px rgba(0, 0, 0, 0.75)';
  }

  const handleClick = (idx) => {
    cellAction(idx);
    console.log(isSquareClicked);
    setSquareIsClicked(true);
    console.log(isSquareClicked);
  };

  return (
    <Button
      style={{ boxShadow: buttonShadow, transform: buttonWidth }}
      type="button"
      onClick={() => handleClick(cellIdx)}
      disabled={isSquareClicked}
    >
      {currentPlayer === 'x' ? (
        <XOutline className="x-outline" />
      ) : (
        <OOutline className="o-outline" />
      )}
    </Button>
  );
};

const Button = styled.button`
  width: 125px;
  height: 125px;
  background-color: var(--clr-btn-primary);
  margin: 1rem;
  border-radius: 10px;
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
      display: block;
    }
  }

  :disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
`;

export default Square;
