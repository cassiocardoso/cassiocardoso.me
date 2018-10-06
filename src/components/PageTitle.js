import styled from 'react-emotion';

import spacing from '../utils/spacing';

/**
 * PageTitle component
 * To be used in secondary pages (about, contact, etc)
 */
const PageTitle = styled('h1')`
  font-size: 4rem;
  margin: ${spacing.halfBaseSpacing} 0 ${spacing.baseSpacing};
  text-align: center;
`;

export default PageTitle;
