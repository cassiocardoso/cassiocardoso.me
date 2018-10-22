import React from 'react';
import styled, { keyframes } from 'react-emotion';

import myPhoto from '../assets/profile-rounded.png';

const PhotoContainer = styled('div')`
  display: flex;
  justify-content: center;
`;

const morph = keyframes`
  0% {
    border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
  }
  100% {
    border-radius: 40% 60%;
  }
`;

const spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Me = styled('div')`
  height: 200px;
  position: relative;
  width: 200px;
`;

const SpinContainer = styled('div')`
  animation: ${spin} 12s linear infinite;
  height: 100%;
  position: relative;
  width: 100%;
`;

const Shape = styled('div')`
  animation: ${morph} 8s ease-in-out infinite both alternate;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  transition: border-radius 1s ease-out;
  width: 100%;
  z-index: 5;
`;

const Photo = styled('div')`
  align-items: center;
  animation: ${spin} 12s linear infinite reverse;
  background: url(${myPhoto});
  background-position: center center;
  background-size: 100%;
  color: #003;
  display: flex;
  font-weight: bold;
  font-size: 5vw;
  height: 110%;
  justify-content: center;
  left: -5%;
  opacity: 1;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: -5%;
  width: 110%;
  z-index: 2;
`;

const MyPhoto = () => (
  <PhotoContainer>
    <Me>
      <SpinContainer>
        <Shape>
          <Photo />
        </Shape>
      </SpinContainer>
    </Me>
  </PhotoContainer>
);

export default MyPhoto;
