import * as React from 'react';
import { RouterProps } from '@reach/router';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import SocialLinks from '../components/SocialLinks';

const IndexPage: React.FunctionComponent<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <PageTitle>Hi, I'm Cassio</PageTitle>
    <p>
      I'm Cassio Cardoso, a software engineer specialized in front-end
      development with 8+ years of experience. I'm a brazilian guy from a small
      city in São Paulo state called Taubaté.
    </p>
    <p>
      Currently I'm living in Berlin and working at{' '}
      <a href="https://omio.com" target="_blank" rel="noopener noreferrer">
        Omio
      </a>{' '}
      where I'm helping to make travel easy for milions of people.
    </p>
    <p>
      Throughout my career I've had the opportunity to do web development in
      general, as well as design, business and management and I'm really happy
      to be able to enjoy all of these areas. Each of them needed a specific
      skill-set and it provided me with a lot of opportunities to grow and
      learn.
    </p>
    <SocialLinks />
  </Layout>
);

export default IndexPage;
