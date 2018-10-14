import React, { Fragment, PureComponent } from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Link from '../components/Link';
import PageTitle from '../components/PageTitle';

class Contact extends PureComponent {
  render() {
    const { location } = this.props;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description',
    );

    return (
      <Fragment>
        <PageTitle>Contact</PageTitle>
        <p>Hey!</p>
        <p>
          Currently I'm not looking for a new job. But if you have some question
          or idea, I would love to help, just write me{' '}
          <Link href="mailto:caugusto.cardoso@gmail.com">an e-mail</Link>.
        </p>
        <p>
          If, somehow, you got my phone number, <strong>do not call me</strong>.
          I'm an introvert, I don't like talking in the phone, specially with
          strangers. Just send me an e-mail, I'll get back to you in a day or
          two.
        </p>
      </Fragment>
    );
  }
}

export default Contact;
