import React, { useState } from 'react';
import styled from 'styled-components';

const Square = ({ cellIdx, cellAction }) => {
  const [isSquareClicked, setSquareIsClicked] = useState(false);
  // setSquareIsClicked(true);
  // isClicked={isSquareClicked}

  let buttonShadow = '';
  if (isSquareClicked) {
    buttonShadow = '0px 0px 0px 0px';
  } else {
    buttonShadow = '0px 14px 10px -1px rgba(0, 0, 0, 0.75)';
  }

  const handleClick = (idx) => {
    cellAction(idx);
    setSquareIsClicked(true);
  };

  return (
    <Button
      style={{ boxShadow: buttonShadow }}
      type="button"
      onClick={() => handleClick(cellIdx)}
    >
      {cellIdx}
    </Button>
  );
};

const Button = styled.button`
  width: 125px;
  height: 125px;
  margin: 1rem;
  border-radius: 10px;
  border: none;
`;

export default Square;
