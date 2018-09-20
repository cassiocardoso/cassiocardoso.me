import styled from 'react-emotion';

import palette from 'utils/palette';
import spacing from 'utils/spacing';

const Content = styled('div')`
  background-color: ${({ location }) =>
    location.pathname !== '/' ? palette.pureWhite : palette.wildSand};
  flex: 1;
  padding: ${spacing.basePadding};
`;

export default Content;
