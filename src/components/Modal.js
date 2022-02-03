import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/context';

const Modal = ({ restartGame }) => {
  const { winningPlayer } = useAppContext();
  console.log(winningPlayer);

  // is a draw
  if (winningPlayer === '-') {
    return (
      <ModalWrapper>
        <div className={`${winningPlayer ? 'modal show' : 'modal'}`}>
          <h2>The Game Has Ended In A Draw</h2>
          {/* restart func is a cheat cause of the way I managed state. Will fix if I ever refactor to use context */}
          <button onClick={() => window.location.reload(false)}>
            Play Again
          </button>
        </div>
      </ModalWrapper>
    );
  }

  return (
    <ModalWrapper>
      <div className={`${winningPlayer ? 'modal show' : 'modal'}`}>
        <h2>{winningPlayer} is the winning player!</h2>
        {/* restart func is a cheat cause of the way I managed state. Will fix if I ever refactor to use context */}
        <button onClick={() => window.location.reload(false)}>
          Play Again
        </button>
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
