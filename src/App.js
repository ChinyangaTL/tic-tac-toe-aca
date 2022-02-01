import { useState } from 'react';
import './App.css';
import { ReactComponent as X } from './images/icons/icon-x.svg';
import { ReactComponent as XBlack } from './images/icons/icon-x-black.svg';
import { ReactComponent as XOutline } from './images/icons/icon-x-outline.svg';
import { ReactComponent as O } from './images/icons/icon-o.svg';
import { ReactComponent as OBlack } from './images/icons/icon-o-black.svg';
import { ReactComponent as OOutline } from './images/icons/icon-o-outline.svg';
import Header from './components/Header';
import styled from 'styled-components';
import Board from './components/Board';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('x');
  return (
    <AppWrapper className="App">
      <Header currentPlayer={currentPlayer} />
      <Board currentPlayer={currentPlayer} changePlayer={setCurrentPlayer} />
    </AppWrapper>
  );
}

const AppWrapper = styled.main`
  width: 500px;
  margin: 0 auto;
`;

export default App;
