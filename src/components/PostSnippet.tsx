import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import IPostSnippet from '../interfaces/PostSnippet.interface';

import theme from './theme';

const StyledPostSnippet = styled.div`
  padding: 3rem 0;

  .title {
    margin: 0 0 1rem 0;

    a {
      color: ${theme.rocketBlack};
      text-decoration: none;

      &:hover {
        color: ${theme.lavenderViolet};
        text-decoration: underline;
      }
    }
  }

  .date {
    font-size: 15px;
    margin: 0 0 0.5rem 0;
  }
`;

const PostSnippet: React.FunctionComponent<IPostSnippet> = ({ post }) => {
  const {
    node: { excerpt, frontmatter },
  } = post;

  return (
    <StyledPostSnippet key={frontmatter.title}>
      <h2 className="title">
        <Link to={`/blog${frontmatter.path}`}>{frontmatter.title}</Link>
      </h2>
      <p className="date">{frontmatter.date}</p>
      <p>{excerpt}</p>
    </StyledPostSnippet>
  );
};

export default PostSnippet;
