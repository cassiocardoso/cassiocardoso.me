import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Appbar from '../components/Appbar';
import Content from '../components/Content';
import Wrapper from '../components/Wrapper';

const Layout = ({ children }) => (
  <Fragment>
    <Appbar />
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Layout;
