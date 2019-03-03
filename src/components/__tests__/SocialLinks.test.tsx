import * as React from 'react';
import { render } from 'react-testing-library';

import SocialLinks from '../SocialLinks';

describe('<SocialLinks />', () => {
  it('should render correctly', () => {
    const { container } = render(<SocialLinks />);

    expect(container).toMatchSnapshot();
  });
});
