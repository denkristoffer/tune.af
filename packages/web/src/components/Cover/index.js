/* @flow */

import React from 'react';
import styled from 'styled-components';

type Props = {
  coverUrl: string,
  children?: Element<any>,
};

const CoverDiv = styled.div`
  overflow: hidden;

  &::before {
    content: url(${props => props.cover});
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    z-index: -1;
  }

  @media (min-width: 500px) {
    &::before {
      content: none;
    }

    min-height: 500px;
    background-image: url(${props => props.cover});
    background-position: 50% 50%;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
`;

const Cover = ({ coverUrl, children }: Props) => (
  <CoverDiv cover={coverUrl.replace(/large/, 't500x500')}>
    {children}
  </CoverDiv>
);

export default Cover;
