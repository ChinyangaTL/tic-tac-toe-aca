import { checkForWinner } from '../utils';
import {
  CHANGE_PLAYER,
  CHECK_WINNER,
  RESET_GAME,
  SET_SQUARES,
  SET_WINNER,
} from './actions';

const reducer = (state, action) => {
  if (action.type === CHANGE_PLAYER) {
    let newCurrentPlayer = '';

    action.payload === 'x'
      ? (newCurrentPlayer = 'o')
      : (newCurrentPlayer = 'x');

    return { ...state, currentPlayer: newCurrentPlayer };
  }
  if (action.type === SET_SQUARES) {
    const grid = [...action.payload];
    return { ...state, squares: grid };
  }
  if (action.type === CHECK_WINNER) {
    const winningPlayer = checkForWinner(action.payload);
    if (!state.squares.includes('')) {
      return { ...state, winningPlayer: '-', isGameOver: true }; // is a draw
    }

    return { ...state, winningPlayer: winningPlayer, isGameOver: true };
  }
  if (action.type === SET_WINNER) {
    console.log(action.payload);
    return { ...state, winningPlayer: action.payload };
  }
  if (action.type === RESET_GAME) {
    return {
      ...state,
      squares: Array(9).fill(''),
      currentPlayer: 'x',
      winningPlayer: null,
      isGameOver: false,
    };
  }
  //   return state;
  throw new Error('No matching action type');
};

export default reducer;
