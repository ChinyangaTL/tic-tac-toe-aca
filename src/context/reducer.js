import { CHANGE_PLAYER, SET_SQUARES } from './actions';

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
  //   return state;
  throw new Error('No matching action type');
};

export default reducer;
