import React from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as RestartBtn } from '../images/icons/icon-restart.svg';

import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logo">
        <Logo />
      </div>

      <button
        className="btn-restart"
        onClick={() => window.location.reload(false)}
      >
        <RestartBtn />
      </button>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn-restart {
    border: none;
    width: 3rem;
    height: 3rem;
    border-radius: var(--radius);
    box-shadow: 0px 5px 2px 0px rgba(255, 255, 255, 0.75);
    transition: var(--transition);

    :hover {
      opacity: 0.6;
      transform: rotate(360deg);
    }
  }
`;

export default Header;
