import React, { Fragment, PureComponent } from 'react';
import styled from 'react-emotion';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Appbar from '../components/Appbar';
import PageTitle from '../components/PageTitle';
import SocialIcons from '../components/SocialIcons';
import Wrapper from '../components/Wrapper';
import messages from '../utils/messages';
import spacing from '../utils/spacing';

const Content = styled('div')`
  max-width: ${spacing.contentMaxWidth};
`;

class Index extends PureComponent {
  render() {
    const { location } = this.props;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description',
    );

    return (
      <Fragment>
        <Appbar />
        <Wrapper>
          <Content>
            <PageTitle>{messages.title}</PageTitle>
            <p>{messages.description}</p>
            <SocialIcons />
          </Content>
        </Wrapper>
      </Fragment>
    );
  }
}

export default Index;
