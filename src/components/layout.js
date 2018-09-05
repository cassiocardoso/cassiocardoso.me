import React, { Fragment, PureComponent } from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from 'utils/typography';

class Layout extends PureComponent {
  render() {
    const { location, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <Fragment>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            Hi, I'm Cassio
          </h1>
          <h2>Software Engineer</h2>
        </Fragment>
      );
    } else {
      header = (
        <h3>
          <Link to={'/'}>Gatsby Starter Blog</Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(26),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
    );
  }
}

export default Layout;
