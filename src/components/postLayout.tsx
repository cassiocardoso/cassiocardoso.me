import * as React from 'react';
import { RouterProps } from '@reach/router';
import Snakke from 'react-snakke';
import { DiscussionEmbed } from 'disqus-react';

import { PostQueryData } from '../interfaces/PostQuery.interface';
import { DISQUS_SHORT_NAME } from '../utils/disqus';

import Layout from './Layout';
import PostTitle from './PostTitle';
import theme from './theme';

type PostLayoutProps = PostQueryData & RouterProps;

class PostLayout extends React.PureComponent<PostLayoutProps> {
  render() {
    const {
      children,
      location,
      pageContext: {
        frontmatter: { path, title },
      },
    } = this.props;
    const disqusConfig = {
      identifier: path,
      title,
    };

    return (
      <Layout location={location}>
        <Snakke
          color={theme.rocketBlack}
          height="4px"
          opacity=".8"
          zIndex="10"
          shadow
        />
        <PostTitle title={title} />
        <div>{children}</div>
        <hr />
        <DiscussionEmbed shortname={DISQUS_SHORT_NAME} config={disqusConfig} />
      </Layout>
    );
  }
}

export default PostLayout;
