import styled from 'react-emotion';

import Z_INDEX from '../utils/zIndex';

const Logo = styled('img')`
  left: calc(50% - 20px);
  margin: 0;
  position: absolute;
  top: 15px;
  z-index: ${Z_INDEX.LEVEL_2};

  &:hover {
    opacity: 0.85;
    transition: all 0.2s linear;
  }
`;

export default Logo;
