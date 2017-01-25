/* @flow */

import React, { PureComponent } from  'react'
import Track from '../Track'
import Cover from '../Cover'

type PlaylistProps = {
  playlist: Array<Object> | Object,
  activeIndex: ?number,
  coverUrl: ?string,
}

class Playlist extends PureComponent {

  props: PlaylistProps

  render() {
    const { activeIndex, playlist, coverUrl } = this.props
    const list = playlist.map((track, index) => (
      <Track
        key={track.id}
        playing={activeIndex === index}
        artist={track.user}
        title={track.title}
        permalink={track.permalink}
        artwork_url={track.artwork_url}
        duration={track.duration}
      />
    ))

    if (coverUrl) {
      return (
        <Cover coverUrl={coverUrl}>
          {list}
        </Cover>
      )
    }

    return (
      <div>
        {list}
      </div>
    )
  }

}

export default Playlist
