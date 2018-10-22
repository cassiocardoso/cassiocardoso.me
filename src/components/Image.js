import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Img = styled('img')`
  margin: 8px;
  opacity: ${({ opacity }) => opacity};
  padding: 8px;
`;

const Image = ({ height, opacity, src, width }) => (
  <Img height={height} opacity={opacity} src={src} width={width} />
);

Image.propTypes = {
  height: PropTypes.number,
  opacity: PropTypes.number,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
};

Image.defaultProps = {
  height: 48,
  opacity: 0.75,
  width: 48,
};

export default Image;
