import styled from 'react-emotion';

import palette from '../utils/palette';

const Link = styled('a')`
  background: linear-gradient(
    ${palette.shakespeareBlue},
    ${palette.shakespeareBlue}
  );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 2px 2px;
  color: ${palette.shakespeareBlue};
  margin: 5px 10px;
  padding: 0 2px;
  text-decoration: none;
  transition: background-size 0.2s, color 0.2s;

  &:hover {
    background-size: 4px 50px;
    color: ${palette.pureWhite};
  }
`;

export default Link;
