import React, { Fragment, PureComponent } from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Appbar from '../components/Appbar';
import Content from '../components/Content';
import PageTitle from '../components/PageTitle';
import SocialIcons from '../components/SocialIcons';
import Wrapper from '../components/Wrapper';
import messages from '../utils/messages';

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
