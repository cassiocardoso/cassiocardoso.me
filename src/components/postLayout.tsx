import * as React from 'react';
import { RouterProps } from '@reach/router';
import { DiscussionEmbed } from 'disqus-react';

import { PostQueryData } from '../interfaces/PostQuery.interface';
import { DISQUS_SHORT_NAME } from '../utils/disqus';

import Layout from './Layout';
import PostTag, { PostTagContainer } from './PostTag';
import PostTitle from './PostTitle';

type PostLayoutProps = PostQueryData & RouterProps;

class PostLayout extends React.PureComponent<PostLayoutProps> {
  render() {
    const {
      children,
      id,
      location,
      pageContext: {
        frontmatter: { tags, title },
      },
    } = this.props;
    const disqusConfig = {
      identifier: id,
      title,
    };

    return (
      <Layout location={location}>
        <PostTitle title={title} />
        <PostTagContainer>
          {tags && tags.split(',').map(tag => <PostTag key={tag} tag={tag} />)}
        </PostTagContainer>
        <div>{children}</div>
        <hr />
        <DiscussionEmbed shortname={DISQUS_SHORT_NAME} config={disqusConfig} />
      </Layout>
    );
  }
}

export default PostLayout;
