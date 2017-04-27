/* @flow */

import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  coverUrl: string,
  children?: React$Element<*>,
};

const Container = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: -1;
`;

const Img = styled.Image`
  width: 300;
  height: 300;
`;

const Cover = ({ coverUrl, children }: Props) => (
  <Container>
    <Img
      source={{ uri: coverUrl.replace(/large/, 't500x500') }}
      resizeMode={Image.resizeMode.cover}
    />
  </Container>
);

export default Cover;
