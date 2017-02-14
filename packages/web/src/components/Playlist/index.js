/* @flow */

import React, { PureComponent } from  'react'
import Helmet from 'react-helmet'
import Track from '../Track'
import Cover from '../Cover'

type Props = {
  playlist: Array<Object> | Object,
  activeIndex: ?number,
  coverUrl: ?string,
  playing: boolean,
}

class Playlist extends PureComponent {

  props: Props

  render() {
    const { activeIndex, playlist, coverUrl, playing } = this.props
    const title = (playlist && activeIndex) ? playlist[activeIndex].title : null
    const list = playlist.map((track, index) => (
      <Track
        key={track.id}
        activeTrack={activeIndex === index}
        artist={track.user}
        title={track.title}
        permalink={track.permalink}
        artwork_url={track.artwork_url}
      />
    ))

    if (coverUrl) {
      return (
        <Cover coverUrl={coverUrl}>
          <Helmet
            title={playing ? title : null}
          />
          {list}
        </Cover>
      )
    }

    return (
      <div>
        <Helmet
          title={playing ? title : null}
        />
        {list}
      </div>
    )
  }

}

export default Playlist
