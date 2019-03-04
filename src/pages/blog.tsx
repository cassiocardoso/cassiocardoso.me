import * as React from 'react';
import { RouterProps } from '@reach/router';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const BlogPage: React.FunctionComponent<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <PageTitle>My blog</PageTitle>
    <p>
      Here is a space where, occasionally, I will share some random thoughts
      about subjects that I find interesting.
    </p>
    <p>
      Let me repeat this: <strong>this is my personal blog</strong>, this is my
      content, and I am the person responsible. Not the company I work for right
      now, not my colleagues, not my manager, not anyone else.
    </p>
  </Layout>
);

export default BlogPage;
