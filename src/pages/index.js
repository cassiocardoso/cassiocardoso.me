import React, { PureComponent } from 'react';
import styled from 'react-emotion';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Image from '../components/Image';
import Wrapper from '../components/Wrapper';
import messages from '../utils/messages';
import spacing from '../utils/spacing';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

const PageTitle = styled('h1')`
  font-size: 4rem;
  margin: ${spacing.halfBaseSpacing} 0 ${spacing.baseSpacing};
  text-align: center;
`;

const Content = styled('div')`
  max-width: ${spacing.contentMaxWidth};
`;

const SocialIconsWrapper = styled('div')`
  align-items: center;
  display: flex;
  justify-content: center;
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
      <Wrapper>
        <Content>
          <PageTitle>{messages.title}</PageTitle>
          <p>{messages.description}</p>
          <SocialIconsWrapper>
            <a
              href="https://github.com/cassiocardoso"
              target="_blank"
              rel="noopener"
            >
              <Image src={github} />
            </a>
            <a
              href="https://www.linkedin.com/in/cassiocardoso/"
              target="_blank"
              rel="noopener"
            >
              <Image src={linkedin} />
            </a>
          </SocialIconsWrapper>
        </Content>
      </Wrapper>
    );
  }
}

export default Index;
