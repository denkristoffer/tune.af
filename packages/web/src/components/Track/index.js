/* @flow */

import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from '../Link'

type TrackArtist = {
  username: string,
}

type TrackProps = {
  permalink: string,
  playing: boolean,
  artist: TrackArtist,
  title: string,
  duration: number,
}

const Wrapper = styled.article`
  & + & {
    margin-top: 10px;
  }
`

const Info = styled.header`
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`

const Title = styled.h1`
  margin: 0;
  padding: 0;
  line-height: 0;
  float: left;
  clear: left;
`

const Artist = styled.address`
  background: ${props => props.playing ? '#020202' : '#fdfdfd'};
  color: ${props => props.playing ? '#fdfdfd' : '#020202'};
  font-size: 14px;
  line-height: 18px;
  font-family: Menlo, 'DejaVu Sans Mono', Consolas, 'Source Code Pro', 'Anonymous Pro', 'Courier New', monospace;
  font-weight: normal;
  font-style: normal;
  text-transform: uppercase;
  float: left;
  padding: 2px 5px;
  position: relative;
  -webkit-font-smoothing: antialiased;
`

const TitleLink = styled(({ playing, ...rest }) => <Link {...rest} />)`
  background: ${props => props.playing ? '#020202' : '#fdfdfd'};
  color: ${props => props.playing ? '#fdfdfd' : '#020202'};
  font-size: 14px;
  line-height: 18px;
  font-family: Menlo, 'DejaVu Sans Mono', Consolas, 'Source Code Pro', 'Anonymous Pro', 'Courier New', monospace;
  font-weight: bold;
  font-style: normal;
  text-transform: uppercase;
  text-decoration: none;
  padding: 2px 5px;
  position: relative;
  box-decoration-break: clone;
  -webkit-font-smoothing: antialiased;
`

class Track extends PureComponent {

  props: TrackProps
  duration: string

  constructor(props: TrackProps) {
    super(props)

    const minutes = Math.floor(props.duration / 1000 / 60)
    const seconds = (props.duration / 1000) % 60

    this.duration = `PT${minutes}M${seconds}S`
  }

  render() {
    const { permalink, title, artist, playing } = this.props

    return (
      <Wrapper>
        {playing ?
          <Helmet
            title={title}
            link={[{rel: "canonical", href: `"https://tune.af/${permalink}"`}]}
          />
          : ''
        }
        <Info>
          <Link to={permalink && permalink}>
            <Artist playing={playing}>{artist.username}</Artist>
          </Link>
          <Title>
            <TitleLink playing={playing} to={permalink && permalink}>
              {title}
            </TitleLink>
          </Title>
        </Info>
      </Wrapper>
    )
  }

}

export default Track
