/* @flow */

import React from 'react';

type IconProps = {
  fill?: string,
};

const IconPlay = ({ fill }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-labelledby="title"
  >
    <title id="title">Play</title>
    <path fill={fill} d="M8,5.14V19.14L19,12.14L8,5.14Z" />
  </svg>
);

IconPlay.defaultProps = {
  fill: '#000',
};

export default IconPlay;
