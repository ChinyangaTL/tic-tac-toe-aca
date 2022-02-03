import React, { useContext, useReducer } from 'react';
import { CHANGE_PLAYER, SET_SQUARES } from './actions';
import reducer from './reducer';

const initalState = {
  squares: Array(9).fill(''),
  currentPlayer: 'x',
  winningPlayer: null,
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

  return (
    <AppContext.Provider
      value={{ ...state, changeCurrentPlayer, updateSquares }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
