import React from 'react';
import styled from 'styled-components';
import { ReactComponent as XGrey } from '../images/icons/icon-x-grey.svg';
import { ReactComponent as OGrey } from '../images/icons/icon-o-grey.svg';
import { useAppContext } from '../context/context';

const Footer = () => {
  const { currentPlayer } = useAppContext();
  return (
    <FooterWrapper>
      <div className="turn-indicator">
        {currentPlayer === 'x' ? <XGrey /> : <OGrey />} <p>Turn</p>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  height: 3rem;
  margin: 1rem 0;
  .turn-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0;
    background-color: red;
    border-radius: var(--radius);
    background-color: var(--clr-btn-primary);
    p {
      margin-left: 1rem;
      font-size: 1.4rem;
      color: white;
    }
  }
`;

export default Footer;
