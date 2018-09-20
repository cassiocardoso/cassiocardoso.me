import React from 'react';

import Content from 'components/Content';
import Sidebar from 'components/Sidebar';
import Wrapper from 'components/Wrapper';

const Layout = ({ children, location }) => (
  <Wrapper>
    <Sidebar />
    <Content location={location}>{children}</Content>
  </Wrapper>
);

export default Layout;
