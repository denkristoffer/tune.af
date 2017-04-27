/* @flow */

import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

const Artist = styled.Text`
  background: ${props => props.active ? '#020202' : '#fdfdfd'};
  color: ${props => props.active ? '#fdfdfd' : '#020202'};
  font-size: 14;
  line-height: 18;
  font-family: Menlo;
  font-weight: normal;
  font-style: normal;
  padding: 2 5;
`;

class Track extends PureComponent {
  props: {
    active: boolean,
  };

  render() {
    const { active } = this.props;

    return (
      <Container>
        <Artist active={active}>sad</Artist>
      </Container>
    );
  }
}

export default Track;
