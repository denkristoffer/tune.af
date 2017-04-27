/* @flow */

import React from 'react';

type IconProps = {
  fill?: string,
};

const IconPause = ({ fill }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-labelledby="title"
  >
    <title id="title">Pause</title>
    <path fill={fill} d="M14,19H18V5H14M6,19H10V5H6V19Z" />
  </svg>
);

IconPause.defaultProps = {
  fill: '#000',
};

export default IconPause;
