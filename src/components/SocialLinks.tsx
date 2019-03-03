import * as React from 'react';
import styled from 'styled-components';
import Github from 'react-feather/dist/icons/github';
import Linkedin from 'react-feather/dist/icons/linkedin';
import Twitter from 'react-feather/dist/icons/twitter';
import Codepen from 'react-feather/dist/icons/codepen';

const StyledSocialLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
  }

  a {
    margin: 1rem;
    padding: 1rem;

    &:first-child {
      margin-left: 0;
      padding-left: 0;
    }
  }
`;

const SocialLinks = () => (
  <StyledSocialLinks>
    <li>
      <a
        href="https://linkedin.com/in/cassiocardoso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </a>
    </li>
    <li>
      <a
        href="https://github.com/cassiocardoso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
    </li>
    <li>
      <a
        href="https://codepen.io/cassiocardoso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Codepen />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/cassiocardoso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </a>
    </li>
  </StyledSocialLinks>
);

export default SocialLinks;
