import { checkForWinner } from '../utils';
import {
  CHANGE_PLAYER,
  CHECK_WINNER,
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
      return { ...state, winningPlayer: '-' };
    }

    return { ...state, winningPlayer: winningPlayer };
  }
  if (action.type === SET_WINNER) {
    console.log(action.payload);
    return { ...state, winningPlayer: action.payload };
  }
  //   return state;
  throw new Error('No matching action type');
};

export default reducer;
