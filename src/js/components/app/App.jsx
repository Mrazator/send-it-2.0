import React from 'react'
import PropTypes from 'prop-types'

import { ChannelsRedux } from '../../containers-redux/channels/Channels'
import { HeadInHelmet } from '../../containers-redux/shared/HeadInHelmet'
import { Errors } from '../../containers-redux/shared/Errors'
import { BodyRedux } from '../../containers-redux/body/Body'

const App = ({ computedMatch }) => {
  const { params: { channelId } } = computedMatch

  return (
    <div className="App">
      <HeadInHelmet />
      <ChannelsRedux channelId={channelId} />
      { channelId ? <BodyRedux channelId={channelId} /> : <div className="Body"><h2>Choose a channel or create one</h2></div>}
      <Errors />
    </div>
  )
}

App.propTypes = {
  computedMatch: PropTypes.object.isRequired
}

export default App
