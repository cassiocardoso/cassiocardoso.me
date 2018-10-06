import React from 'react';
import styled from 'react-emotion';

import Image from './Image';
import email from '../assets/email.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

const SocialIconsWrapper = styled('div')`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const SocialIcons = () => (
  <SocialIconsWrapper>
    <a href="https://github.com/cassiocardoso" target="_blank" rel="noopener">
      <Image src={github} />
    </a>
    <a
      href="https://www.linkedin.com/in/cassiocardoso/"
      target="_blank"
      rel="noopener"
    >
      <Image src={linkedin} />
    </a>
    <a href="mailto:caugusto.cardoso@gmail.com">
      <Image src={email} />
    </a>
  </SocialIconsWrapper>
);

export default SocialIcons;
