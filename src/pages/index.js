import React, { PureComponent } from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Layout from 'components/layout';

class Index extends PureComponent {
  render() {
    const { location } = this.props;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description',
    );

    return (
      <Layout location={location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
      </Layout>
    );
  }
}

export default Index;
