export const checkForWinner = (array) => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (array[a] && array[a] === array[b] && array[a] === array[c]) {
      console.log(array[a]);
      return array[a];
    }
  }
  return null;
};
