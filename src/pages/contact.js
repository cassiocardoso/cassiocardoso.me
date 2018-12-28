import React, { Fragment, PureComponent } from 'react';

import Link from '../components/Link';
import PageTitle from '../components/PageTitle';

class Contact extends PureComponent {
  render() {
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
