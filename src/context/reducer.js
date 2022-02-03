import { CHANGE_PLAYER } from './actions';

const reducer = (state, action) => {
  if (action.type === CHANGE_PLAYER) {
    let newCurrentPlayer = '';

    action.payload === 'x'
      ? (newCurrentPlayer = 'o')
      : (newCurrentPlayer = 'x');

    return { ...state, currentPlayer: newCurrentPlayer };
  }
  //   return state;
  throw new Error('No matching action type');
};

export default reducer;
