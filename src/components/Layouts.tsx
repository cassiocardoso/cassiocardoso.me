import * as React from 'react';
import { RouterProps } from '@reach/router';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import { useLayoutQuery } from '../hooks/useLayoutQuery';

import GlobalStyle from './GlobalStyle';
import Header from './Header';
import theme from './theme';

const MainLayout = styled.main`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 48px 1fr;
  margin: 1rem auto;
  max-width: 800px;
`;

type LayoutProps = React.ReactNode & RouterProps;

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const { site } = useLayoutQuery();

  const { title, description, keywords } = site.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <MainLayout>
          <Header />
          <div>{children}</div>
        </MainLayout>
      </>
    </ThemeProvider>
  );
};

export default Layout;
