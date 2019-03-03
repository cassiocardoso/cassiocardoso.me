import * as React from 'react';
import { RouterProps } from '@reach/router';

import { PostQueryData } from '../interfaces/PostQuery.interface';
import Layout from './Layout';

type PostLayoutProps = PostQueryData & RouterProps;

const PostLayout: React.FunctionComponent<PostLayoutProps> = ({
  data,
  ...props
}) => {
  if (data) {
    const { title, date } = data.mdx.frontmatter;
    const { location, children } = props;

    return (
      <Layout location={location}>
        <h1>{title}</h1>
        <em>{date}</em>
        {children}
      </Layout>
    );
  }

  return <div>No Post Data</div>;
};

export default PostLayout;
