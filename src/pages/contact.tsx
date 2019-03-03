import * as React from 'react';
import { RouterProps } from '@reach/router';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const ContactPage: React.FunctionComponent<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <PageTitle>Wanna talk?</PageTitle>
    <p>Hey!</p>
    <p>
      Currently I'm not looking for a new job. But if you have some question or
      idea, I would love to help, just write me{' '}
      <a href="mailto:caugusto.cardoso@gmail.com">an e-mail</a>.
    </p>
    <p>
      If, somehow, you got my phone number, <strong>do not call me</strong>. I'm
      an introvert, I don't like talking in the phone, specially with strangers.
      Just send me an e-mail, I'll get back to you in a day or two.
    </p>
  </Layout>
);

export default ContactPage;
