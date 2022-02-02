import React from 'react';
import styled from 'styled-components';

const Modal = ({ hasWinner, restartGame }) => {
  console.log(hasWinner);
  return (
    <ModalWrapper>
      <div className={`${hasWinner ? 'modal show' : 'modal'}`}>
        <h2>{hasWinner} is the winning player!</h2>
        <button onClick={restartGame}>Play Again</button>
      </div>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  h2 {
    margin: 0;
    color: var(--clr-bcg);
    text-transform: capitalize;
  }

  .modal {
    position: absolute;
    background-color: white;
    width: 100%;
    height: 4rem;
    border-radius: var(--radius);
    top: 50%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    padding: 3rem 0;
    display: none;
  }

  .modal.show {
    display: block;
  }

  button {
    width: 70%;
    align-self: center;
    padding: 0.75rem;
    margin-top: 1rem;
    border-radius: var(--radius);
    border: none;
    background-color: #5cb85c;
    font-size: 1rem;
    color: white;
  }
`;

export default Modal;
