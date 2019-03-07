import * as React from 'react';
import { RouterProps } from '@reach/router';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import PostSnippet from '../components/PostSnippet';

import IBlogPageQuery from '../interfaces/BlogPageQuery.interface';
import IPostNode from '../interfaces/PostNode.interface';

type BlogPageProps = IBlogPageQuery & RouterProps;

const BlogPage: React.FunctionComponent<BlogPageProps> = ({
  data,
  location,
}) => {
  const posts = data.allMdx.edges;

  return (
    <Layout location={location}>
      <PageTitle>My blog</PageTitle>
      <p>
        Here is a space where, occasionally, I will share some random thoughts
        about subjects that I find interesting.
      </p>
      <p>
        Let me repeat this: <strong>this is my personal blog</strong>, this is
        my content, and I am the person responsible. Not the company I work for
        right now, not my colleagues, not my manager, not anyone else.
      </p>
      <hr />
      {posts.map((post: IPostNode) => (
        <PostSnippet post={post} />
      ))}
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false }, noIndex: { eq: false } } }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
