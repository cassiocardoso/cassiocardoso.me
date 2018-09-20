import React from 'react';
import styled from 'react-emotion';

import Title from 'components/Title';
import messages from 'utils/messages';
import palette from 'utils/palette';
import spacing from 'utils/spacing';

const StyledSidebar = styled('div')`
  background-color: ${palette.wildSand};
  padding: ${spacing.basePadding};
  width: ${spacing.sidebarWidth};
  min-width: ${spacing.sidebarMinWidth};
`;

const Sidebar = () => (
  <StyledSidebar>
    <Title>{messages.title}</Title>
    <p>{messages.description}</p>
    <p>
      I'm currently working at{' '}
      <a href="https://quintoandar.com.br" target="_blank" rel="noopener">
        QuintoAndar
      </a>{' '}
      and living in São Paulo, Brazil.
    </p>
  </StyledSidebar>
);

export default Sidebar;
