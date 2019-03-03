import * as React from 'react';
import styled from 'styled-components';

const StyledPageTitle = styled.h1`
  font-family: 'Rock Salt';
  font-size: 40px;
  margin: 3rem 0;
`;

interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => (
  <StyledPageTitle>{children}</StyledPageTitle>
);

export default PageTitle;
