import * as React from 'react';
import { RouterProps } from '@reach/router';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import { useLayoutQuery } from '../hooks/useLayoutQuery';

import Header from './header';
import './layout.css';

interface ThemeProps {
  celadonGreen: string;
  celadonPink: string;
  ceruleanBlue: string;
  cinnabarRedDark: string;
  cinnabarRedLight: string;
  fuchsiaPurple: string;
  icyWhite: string;
  lavenderPurple: string;
  oakLabGray: string;
  pewterGray: string;
  rocketBlack: string;
  saffronGold: string;
  vermillionYellow: string;
  viridianGreenDark: string;
  viridianGreenLight: string;
}

// TODO: Move theme definition to it's own file
const theme: ThemeProps = {
  celadonGreen: '#61bc47',
  celadonPink: '#dd4261',
  ceruleanBlue: '#76aabf',
  cinnabarRedDark: '#bb3f4a',
  cinnabarRedLight: '#bc4c65',
  fuchsiaPurple: '#b453a2',
  icyWhite: '#f1f2f6',
  lavenderPurple: '#977bb6',
  oakLabGray: '#e6e6e6',
  pewterGray: '#9e9e9e',
  rocketBlack: '#050505',
  saffronGold: '#ecc663',
  vermillionYellow: '#f5c853',
  viridianGreenDark: '#469b5a',
  viridianGreenLight: '#afc37e',
};

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
