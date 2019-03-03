import * as React from 'react';
import { RouterProps } from '@reach/router';

import Layout from '../components/Layout';

const IndexPage: React.FunctionComponent<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <h1>home page</h1>
  </Layout>
);

export default IndexPage;
