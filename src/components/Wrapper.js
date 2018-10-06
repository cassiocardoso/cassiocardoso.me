import styled from 'react-emotion';

import palette from '../utils/palette';
import spacing, { APPBAR_MIN_HEIGHT } from '../utils/spacing';

const Wrapper = styled('div')`
  align-items: center;
  background-color: ${palette.wildSand};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: calc(100vh - ${APPBAR_MIN_HEIGHT});
  padding: ${spacing.baseSpacing};
`;

export default Wrapper;
