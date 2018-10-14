import React, { Fragment, PureComponent } from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Link from '../components/Link';
import Nav from '../components/Nav';
import SiteTitle from '../components/SiteTitle';
import SocialIcons from '../components/SocialIcons';
import messages from '../utils/messages';

class Index extends PureComponent {
  render() {
    const { location } = this.props;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description',
    );

    return (
      <Fragment>
        <SiteTitle>{messages.title}</SiteTitle>
        <p>{messages.description}</p>
        <Nav>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </Nav>
        <SocialIcons />
      </Fragment>
    );
  }
}

export default Index;
