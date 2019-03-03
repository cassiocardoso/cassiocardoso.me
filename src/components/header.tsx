import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Book from 'react-feather/dist/icons/book';
import Home from 'react-feather/dist/icons/home';
import Mail from 'react-feather/dist/icons/mail';
import User from 'react-feather/dist/icons/user';

import Logo from '../images/logo-white-300px.png';

interface HeaderMenuProps {
  isCollapsed: boolean;
}

const HeaderWrapper = styled.div`
  position: relative;
`;

const LogoWrapper = styled.div`
  background: ${props => props.theme.rocketBlack};
  border: 1px solid #050505;
  border-radius: 100% 100% 0% 0% / 50% 50% 0% 0%;
  display: flex;
  height: auto;
  max-height: 48px;
  margin-top: 48px;
  justify-content: center;
  position: relative;
  z-index: 100;
`;

const StyledLogo = styled.img`
  cursor: pointer;
  height: 48px;
  margin: 0.5rem 0 0 0;
  width: 27px;
`;

const HeaderMenu = styled.div`
  background: ${props => props.theme.rocketBlack};
  color: ${props => props.theme.oakLabGray};
  height: auto;
  max-height: ${(props: HeaderMenuProps) =>
    props.isCollapsed ? '0' : '600px'};
  overflow: hidden;
  transition: max-height 0.85s ease-in-out;

  ul {
    align-items: center;
    display: flex;
    flex-flow: column;
    list-style: none;
    margin: 2rem 0;
    padding: 0;
  }

  a {
    margin: 0.25rem;
    padding: 0.5rem;
    position: relative;
  }

  svg {
    color: ${props => props.theme.icyWhite};
  }
`;

const HeaderBottom = styled.div`
  z-index: 0;
  transition: all 0.85s ease-in-out;

  &:after {
    border-left: 24px solid transparent;
    border-right: 24px solid transparent;
    border-top: 24px solid #050505;
    content: '';
    display: inline-block;
    height: 0;
    height: 3px;
    position: absolute;
    transform: translateY(0);
    width: 0;
  }
`;

const Header = () => {
  const [isCollapsed, toggleHeader] = React.useState(true);

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <StyledLogo
          src={Logo}
          alt="Cassio Cardoso"
          onClick={() => toggleHeader(!isCollapsed)}
        />
      </LogoWrapper>
      <HeaderMenu isCollapsed={isCollapsed}>
        <ul>
          <Link to="/">
            <Home />
          </Link>
          <Link to="/about">
            <User />
          </Link>
          <Link to="/blog">
            <Book />
          </Link>
          <Link to="/contact">
            <Mail />
          </Link>
        </ul>
      </HeaderMenu>
      <HeaderBottom />
    </HeaderWrapper>
  );
};

export default Header;
