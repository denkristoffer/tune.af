/* @flow */

import React from 'react'
import Player from '../Player'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const clientId = process.env.REACT_APP_CLIENT_ID ? process.env.REACT_APP_CLIENT_ID : ''
const resolveUrl = 'https://soundcloud.com/kristoffer/sets/handpicked'

const CreditLink = styled.a`
  background: #fff;
  font-size: 12px;
  line-height: 14px;
  font-family: Menlo, 'DejaVu Sans Mono', Consolas, 'Source Code Pro', 'Anonymous Pro', 'Courier New', monospace;
  text-transform: lowercase;

  @media (min-width: 700px) {
    position: fixed;
    bottom: 10px;
    right: 10px;
  }
`

const SCLink = styled.a`
  background: #fff;

  @media (min-width: 700px) {
    position: fixed;
    bottom: 23px;
    right: 10px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  align-content: flex-center;
  padding-top: 50px;

  @media (min-width: 700px) {
    padding: 0;
  }
`

const TextCenter = styled.div`
  text-align: center;
`

const App = () => (
  <Container>
    <Helmet
      defaultTitle="TUNE AF"
      titleTemplate="%s – TUNE AF"
      meta={[
        {name: "description", content: "Tunes, handpicked by @denkristoffer."},
      ]}
    />

    <main>
      <Player
        clientId={clientId}
        resolveUrl={resolveUrl}
      />
    </main>

    <Footer>
      <TextCenter>
        <CreditLink href="https://twitter.com/denkristoffer">Made by Kristoffer</CreditLink>
      </TextCenter>
      <TextCenter>
        <SCLink href="https://soundcloud.com">
          <img src="https://developers.soundcloud.com/assets/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png" alt="Powered by SoundCloud" />
        </SCLink>
      </TextCenter>
    </Footer>
  </Container>
)

export default App
