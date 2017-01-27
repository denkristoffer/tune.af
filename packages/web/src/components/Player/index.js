/* @flow */

import React, { PureComponent } from 'react'
import pickBy from 'lodash/pickBy'
import Spinner from '../Spinner'
import Playlist from '../Playlist'
import { history } from  '../../History'
import SoundCloudAudio from 'soundcloud-audio'
import PlayButton from '../PlayButton'
import ShuffleButton from '../ShuffleButton'

type PlayerProps = {
  clientId: string,
  resolveUrl: string,
}

type PlayerState = {
  playlist?: Object,
  activeIndex: ?number,
  coverUrl?: string,
  playing: boolean,
  shuffle: boolean,
}

class Player extends PureComponent {

  props: PlayerProps
  state: PlayerState
  soundCloudAudio: Object
  playTrackAtIndex: Function
  handleLocationChange: Function
  handlePlayPauseClick: Function
  handleShuffleClick: Function

  constructor(props: PlayerProps) {
    super()

    this.state = {
      activeIndex: null,
      playing: true,
      shuffle: false,
    }

    this.playTrackAtIndex = this.playTrackAtIndex.bind(this)
    this.soundCloudAudio = new SoundCloudAudio(props.clientId)
    this.soundCloudAudio.on('ended', this.handleTrackEnd.bind(this))
    this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this)
    this.handleShuffleClick = this.handleShuffleClick.bind(this)
    history.listen(this.handleLocationChange.bind(this))
    document.addEventListener('keydown', this.handleKeydown.bind(this), false)
  }

  componentDidMount() {
    this.requestAudio()
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown.bind(this), false)
    this.soundCloudAudio.unbindAll()
  }

  requestAudio() {
    const { resolveUrl } = this.props

    this.soundCloudAudio.resolve(resolveUrl, (data) => {
      // Always keep the first track of the playlist as the opening track,
      // because I like it that way. Reverse the rest of them so the newest
      // tracks play first
      const firstTrack = data.tracks.shift()
      const playlist = data.tracks.reverse()
      playlist.unshift(firstTrack)

      this.setState({ playlist }, () => {
        const location = window.location.pathname.substring(1)
        location ? this.playTrackByPermalink(location) : this.playTrackAtIndex(0)
      })
    })
  }

  playTrackByPermalink(permalink: string) {
    const { playlist } = this.state

    if (playlist) {
      const chosenTrack = pickBy(playlist, (track) => track.permalink === permalink)
      const index = Number(Object.keys(chosenTrack)[0], 10)

      if (index !== this.state.activeIndex) {
        this.playTrackAtIndex(Number(Object.keys(chosenTrack)[0], 10))
      }
    }
  }

  playTrackAtIndex(playlistIndex: number) {
    const { playlist } = this.state

    if (playlist) {
      this.setState({
        activeIndex: playlistIndex,
        coverUrl: playlist[playlistIndex].artwork_url,
        playing: true,
      })

      this.soundCloudAudio.play({ playlistIndex })
    }
  }

  shuffleIndex(maximumIndex: number) {
    const { activeIndex } = this.state
    let index = Math.floor(Math.random() * maximumIndex)

    if (index === activeIndex) {
      index = this.shuffleIndex(maximumIndex)
    }

    return index
  }

  handleLocationChange(location: Object) {
    const permalink = location.pathname.substring(1)

    window._paq.push(['trackEvent', 'LocationChange', permalink])
    this.playTrackByPermalink(permalink)
  }

  handleTrackEnd() {
    const { activeIndex, playlist, shuffle } = this.state

    if (playlist) {
      let index

      if (shuffle) {
        index = this.shuffleIndex(playlist.length)
      }
      else {
        index = (activeIndex + 1 < playlist.length) ? activeIndex + 1 : 0
      }

      history.push(`/${playlist[index].permalink}`)
      this.playTrackAtIndex(index)
    }
  }

  handleKeydown(event: Object) {
    if (event.keyCode === 32) {
      event.preventDefault()
      this.handlePlayPauseClick()
    }
  }

  handlePlayPauseClick() {
    const { playing } = this.state

    if (playing) {
      this.soundCloudAudio.pause()
    }
    else {
      this.soundCloudAudio.play({ playlistIndex: this.soundCloudAudio._playlistIndex })
    }

    this.setState({ playing: !playing })
  }

  handleShuffleClick() {
    const { shuffle } = this.state

    window._paq.push(['trackEvent', 'Shuffle', !shuffle])
    this.setState({ shuffle: !shuffle })
  }

  render() {
    const { playlist, activeIndex, shuffle, coverUrl, playing } = this.state

    if (!playlist) {
      return <Spinner size={5} />
    }

    return (
      <div>
        <ShuffleButton active={shuffle} handleClick={this.handleShuffleClick} />
        <PlayButton playing={playing} handleClick={this.handlePlayPauseClick} />

        <Playlist
          playlist={playlist}
          activeIndex={activeIndex}
          coverUrl={coverUrl}
        />
      </div>
    )
  }

}

export default Player
