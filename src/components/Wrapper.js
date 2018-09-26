import styled from 'react-emotion';

import palette from '../utils/palette';
import spacing from '../utils/spacing';

const Wrapper = styled('div')`
  align-items: center;
  background-color: ${palette.wildSand};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  padding: ${spacing.baseSpacing};
`;

export default Wrapper;
