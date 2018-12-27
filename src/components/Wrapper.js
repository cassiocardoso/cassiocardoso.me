import styled from 'react-emotion';

import palette from '../utils/palette';
import { BASE_PADDING_VALUE } from '../utils/spacing';

const Wrapper = styled('div')`
  align-items: center;
  background-color: ${palette.wildSand};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  padding: ${BASE_PADDING_VALUE * 2}px;
`;

export default Wrapper;
