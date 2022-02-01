import React from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as RestartBtn } from '../images/icons/icon-restart.svg';
import { ReactComponent as XGrey } from '../images/icons/icon-x-grey.svg';
import { ReactComponent as OGrey } from '../images/icons/icon-o-grey.svg';
import styled from 'styled-components';

const Header = ({ currentPlayer }) => {
  return (
    <HeaderWrapper>
      <div className="logo">
        <Logo />
      </div>
      <div className="turn-indicator">
        {currentPlayer === 'x' ? <XGrey /> : <OGrey />} Turn
      </div>
      <button className="btn-restart">
        <RestartBtn />
      </button>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
