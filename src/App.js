import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import Board from './components/Board';
import Footer from './components/Footer';

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <Board />
      <Footer />
    </AppWrapper>
  );
}

const AppWrapper = styled.main`
  width: 500px;
  height: 100vh;
  margin: 0 auto;
`;

export default App;
