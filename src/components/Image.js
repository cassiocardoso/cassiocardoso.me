import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Img = styled('img')`
  margin: 8px;
  opacity: 0.75;
  padding: 8px;
`;

const Image = ({ height, src, width }) => (
  <Img height={height} src={src} width={width} />
);

Image.propTypes = {
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
};

Image.defaultProps = {
  height: 48,
  width: 48,
};

export default Image;
