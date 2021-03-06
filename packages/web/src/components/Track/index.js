/* @flow */

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Link from '../Link';

type Props = {
  permalink: string,
  activeTrack: boolean,
  title: string,
  artist: {
    username: string,
  },
};

const Wrapper = styled.article`
  & + & {
    margin-top: 10px;
  }
`;

const Info = styled.header`
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  line-height: 0;
  float: left;
  clear: left;
`;

const Artist = styled.address`
  background: ${props => (props.activeTrack ? '#020202' : '#fdfdfd')};
  color: ${props => (props.activeTrack ? '#fdfdfd' : '#020202')};
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
`;

const TitleLink = styled(({ activeTrack, ...rest }) => <Link {...rest} />)`
  background: ${props => (props.activeTrack ? '#020202' : '#fdfdfd')};
  color: ${props => (props.activeTrack ? '#fdfdfd' : '#020202')};
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
`;

class Track extends PureComponent {
  props: Props;

  render() {
    const { permalink, title, artist, activeTrack } = this.props;

    return (
      <Wrapper>
        {activeTrack && window.location.pathname !== '/'
          ? <Helmet
              link={[
                { rel: 'canonical', href: `"https://tune.af/${permalink}"` },
              ]}
              meta={[
                {
                  name: 'description',
                  content: `${title}. Handpicked by @denkristoffer.`,
                },
              ]}
            />
          : ''}
        <Info>
          <Link to={permalink && permalink}>
            <Artist activeTrack={activeTrack}>{artist.username}</Artist>
          </Link>
          <Title>
            <TitleLink activeTrack={activeTrack} to={permalink && permalink}>
              {title}
            </TitleLink>
          </Title>
        </Info>
      </Wrapper>
    );
  }
}

export default Track;
