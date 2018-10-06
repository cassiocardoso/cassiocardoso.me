import styled from 'react-emotion';

import spacing from '../utils/spacing';

/**
 * SiteTitle component
 * Used in the homepage
 */
const SiteTitle = styled('h1')`
  font-size: 4rem;
  margin: ${spacing.halfBaseSpacing} 0 ${spacing.baseSpacing};
  text-align: center;
`;

export default SiteTitle;
