import React, { useContext, useReducer, useEffect } from 'react';
import {
  CHANGE_PLAYER,
  CHECK_WINNER,
  RESET_GAME,
  SET_SQUARES,
  SET_WINNER,
} from './actions';
import reducer from './reducer';

const initalState = {
  squares: Array(9).fill(''),
  currentPlayer: 'x',
  winningPlayer: null,
  isGameOver: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const changeCurrentPlayer = (currentPlayer) => {
    dispatch({ type: CHANGE_PLAYER, payload: currentPlayer });
  };

  const updateSquares = (currentSquares) => {
    dispatch({ type: SET_SQUARES, payload: currentSquares });
  };

  const checkForWinningPlayer = (array) => {
    dispatch({ type: CHECK_WINNER, payload: array });
  };

  const setWinningPlayer = (player) => {
    dispatch({ type: SET_WINNER, payload: player });
  };

  const restartGame = () => {
    dispatch({ type: RESET_GAME });
  };

  useEffect(() => {
    checkForWinningPlayer(state.squares);
  }, [state.squares]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        changeCurrentPlayer,
        updateSquares,
        checkForWinningPlayer,
        setWinningPlayer,
        restartGame,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
