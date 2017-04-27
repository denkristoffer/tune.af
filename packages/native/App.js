/* @flow */

import React, { Component } from 'react';
import { Linking, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Player from './src/components/Player';

const clientId = 'asd';
const resolveUrl = 'https://soundcloud.com/kristoffer/sets/handpicked';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background: #fff;
`;

const CreditLink = styled.Text`
  font-size: 12;
  line-height: 14;
  font-family: Menlo;
  text-align: center;
`;

const SCLink = styled.Image`
  width: 104;
  height: 32;
  align-self: center;
`;

const Touch = styled.TouchableOpacity``;

class App extends Component {
  handleLinkClick(url: string) {
    Linking.openURL(url);
  }

  render() {
    return (
      <Container>
        <StatusBar hidden={true} />

        <Player clientId={clientId} resolveUrl={resolveUrl} />

        <Touch
          onPress={this.handleLinkClick.bind(this, 'https://soundcloud.com')}
        >
          <SCLink
            source={{
              uri: 'https://developers.soundcloud.com/assets/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png',
            }}
          />
        </Touch>

        <Touch
          onPress={this.handleLinkClick.bind(
            this,
            'https://twitter.com/denkristoffer'
          )}
        >
          <CreditLink>
            made by kristoffer
          </CreditLink>
        </Touch>
      </Container>
    );
  }
}

export default App;
