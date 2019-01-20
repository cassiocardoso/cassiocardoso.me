import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const IMAGE_DISPLAY = {
  BLOCK: 'block',
  INLINE: 'inline',
};

const Img = styled('img')`
  display: ${({ display }) => display};
  margin: ${({ display }) =>
    display === IMAGE_DISPLAY.BLOCK ? '0 auto' : '8px'};
  opacity: ${({ opacity }) => opacity};
  padding: 8px;
`;

const Image = ({ alt, display, height, opacity, src, width }) => (
  <Img
    alt={alt}
    display={display}
    height={height}
    opacity={opacity}
    src={src}
    width={width}
  />
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  display: PropTypes.oneOf([IMAGE_DISPLAY.BLOCK, IMAGE_DISPLAY.INLINE]),
  height: PropTypes.number,
  opacity: PropTypes.number,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
};

Image.defaultProps = {
  display: IMAGE_DISPLAY.INLINE,
  height: 48,
  opacity: 1,
  width: 48,
};

export default Image;
