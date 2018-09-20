import styled from 'react-emotion';

import { rhythm, scale } from '../utils/typography';

const Title = styled('h1')`
  ${scale(1.5)};
  margin: ${`0 0 ${rhythm(1.5)} 0`};
`;

export default Title;
