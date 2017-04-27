/* @flow */

import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background: ${props => props.shuffling ? '#fff' : '#000'};
  position: absolute;
  bottom: 10;
  right: 80;
  width: 60;
  height: 60;
`;

class ShuffleButton extends PureComponent {
  props: {
    onPress: Function,
    shuffling: boolean,
  };

  render() {
    const { onPress, shuffling } = this.props;

    return (
      <Button onPress={onPress} shuffling={shuffling}>
        <Text>shuf</Text>
      </Button>
    );
  }
}

export default ShuffleButton;
