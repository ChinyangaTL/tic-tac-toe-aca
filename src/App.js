import { useState } from 'react';
import './App.css';
import { ReactComponent as X } from './images/icons/icon-x.svg';
import { ReactComponent as XBlack } from './images/icons/icon-x-black.svg';
import { ReactComponent as O } from './images/icons/icon-o.svg';
import { ReactComponent as OBlack } from './images/icons/icon-o-black.svg';
import Header from './components/Header';
import styled from 'styled-components';
import Board from './components/Board';
import Footer from './components/Footer';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('o');
  return (
    <AppWrapper className="App">
      <Header currentPlayer={currentPlayer} />
      <Board currentPlayer={currentPlayer} changePlayer={setCurrentPlayer} />
      <Footer currentPlayer={currentPlayer} />
    </AppWrapper>
  );
}

const AppWrapper = styled.main`
  width: 500px;
  height: 100vh;
  margin: 0 auto;
`;

export default App;
