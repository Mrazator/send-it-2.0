import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ChannelsRedux } from './containers-redux/channels/Channels'
import { app } from './reducers/app'
import { channelList } from "./reducers/channels/channelList";
import { getInitialItems } from "./utils/getInitialItems"

const initialState = {
  app: {
    channelList: getInitialItems()
  }
}

const store = createStore(app, channelList)

import Body from "./components/body/Body"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ChannelsRedux/>
          <Body/>
        </div>
      </Provider>
    )
  }
}

export default App
