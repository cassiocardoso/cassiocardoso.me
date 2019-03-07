import * as React from 'react';
import styled from 'styled-components';

import theme from './theme';

type PostTagProps = {
  tag: string;
};

export const PostTagContainer = styled.div`
  margin-bottom: 32px;
`;

const StyledPostTag = styled.span`
  border: 2px solid ${theme.lavenderViolet};
  border-radius: 30px;
  color: ${theme.lavenderViolet};
  font-size: 14px;
  margin-right: 8px;
  padding: 4px 8px;
`;

const PostTag = ({ tag }: PostTagProps) => <StyledPostTag>{tag}</StyledPostTag>;

export default PostTag;
