import * as React from 'react';
import { RouterProps } from '@reach/router';

import { PostQueryData } from '../interfaces/PostQuery.interface';

import Layout from './Layout';
import PostTag, { PostTagContainer } from './PostTag';
import PostTitle from './PostTitle';

type PostLayoutProps = PostQueryData & RouterProps;

class PostLayout extends React.PureComponent<PostLayoutProps> {
  render() {
    const {
      children,
      location,
      pageContext: {
        frontmatter: { tags, title },
      },
    } = this.props;

    return (
      <Layout location={location}>
        <PostTitle title={title} />
        <PostTagContainer>
          {tags && tags.split(',').map(tag => <PostTag key={tag} tag={tag} />)}
        </PostTagContainer>
        <div>{children}</div>
      </Layout>
    );
  }
}

export default PostLayout;
