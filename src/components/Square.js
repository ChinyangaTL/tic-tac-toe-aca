import React from 'react';

const Square = ({ cellIdx, cellAction }) => {
  return (
    <button type="button" onClick={() => cellAction(cellIdx)}>
      {cellIdx}
    </button>
  );
};

export default Square;
