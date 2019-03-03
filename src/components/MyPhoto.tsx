import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import profilePhoto from '../images/profile-picture.png';

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
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

const Me = styled.div`
  height: 175px;
  position: relative;
  width: 175px;
`;

const SpinContainer = styled.div`
  animation: ${spin} 12s linear infinite;
  height: 100%;
  position: relative;
  width: 100%;
`;

const Shape = styled.div`
  animation: ${morph} 8s ease-in-out infinite both alternate;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  transition: border-radius 1s ease-out;
  width: 100%;
  z-index: 5;
`;

const Photo = styled.div`
  align-items: center;
  animation: ${spin} 12s linear infinite reverse;
  background: url(${profilePhoto});
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
