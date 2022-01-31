/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <Close id="close" strokeWidth={1} onClick={onDismiss} />
        <Nav>
          <Link href="/sale">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </Nav>
        <Footer>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  `;
  
  const Content = styled(DialogContent)`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background: ${COLORS.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  padding-right: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;
  font-size: calc(14 / 18 * 1rem);
  color: ${COLORS.gray[700]};
  flex: 1;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Close = styled(Icon)`
  margin-left: auto;
  flex: 1;
`
export default MobileMenu;
