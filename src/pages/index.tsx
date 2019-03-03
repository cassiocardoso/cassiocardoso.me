import * as React from 'react';
import { RouterProps } from '@reach/router';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SocialLinks from '../components/SocialLinks';

const Title = styled.h1`
  font-family: 'Rock Salt';
  font-size: 40px;
  margin: 3rem 0;
`;

const IndexPage: React.FunctionComponent<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <Title>Hi, I'm Cassio</Title>
    <p>
      I'm Cassio Cardoso, a software engineer specialized in front-end
      development with 8+ years of experience. I'm a brazilian guy from a small
      city in São Paulo state called Taubaté.
    </p>
    <p>
      Currently I'm living in Berlin and working at{' '}
      <a href="https://omio.com">Omio</a> where I'm helping to make travel easy
      for milions of people.
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
