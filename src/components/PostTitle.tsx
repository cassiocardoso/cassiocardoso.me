import * as React from 'react';
import styled from 'styled-components';

type PostTitleProps = {
  title: string;
};

const StyledPostTitle = styled.h1`
  font-family: 'Rock Salt';
  line-height: 1.75;
  margin: 48px 0 16px 0;
`;

const PostTitle = ({ title }: PostTitleProps) => (
  <StyledPostTitle>{title}</StyledPostTitle>
);

export default PostTitle;
