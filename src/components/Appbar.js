import React from 'react';
import styled from 'react-emotion';

import Link from './Link';
import Logo from './Logo';
import logo from '../assets/white-c.png';
import palette from '../utils/palette';
import spacing, { APPBAR_MIN_HEIGHT } from '../utils/spacing';

const StyledAppbar = styled('div')`
  align-items: center;
  background-color: ${palette.almostBlack};
  color: ${palette.wildSand};
  display: flex;
  justify-content: space-between;
  min-height: ${APPBAR_MIN_HEIGHT};
  padding: ${spacing.quarterBaseSpacing};

  &::after {
    border-color: ${palette.almostBlack} transparent transparent transparent;
    border-style: solid;
    border-width: 20px 20px 0 20px;
    content: '';
    left: calc(50% - 23px);
    height: 0;
    position: absolute;
    top: ${APPBAR_MIN_HEIGHT};
    width: 0;
  }
`;

const Appbar = () => (
  <StyledAppbar>
    <Link href="/">
      <Logo src={logo} height={60} />
    </Link>
  </StyledAppbar>
);

export default Appbar;
