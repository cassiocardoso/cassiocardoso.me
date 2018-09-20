import React from 'react';

import Content from './Content';
import Sidebar from './Sidebar';
import Wrapper from './Wrapper';

const Layout = ({ children, location }) => (
  <Wrapper>
    <Sidebar />
    <Content location={location}>{children}</Content>
  </Wrapper>
);

export default Layout;
