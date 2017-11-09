import React from 'react'
import ReactDOM from 'react-dom'
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

import App from './js/App'
import registerServiceWorker from './js/services/registerServiceWorker'

import './styles/config/normalize.css'
import './styles/index.css'

import { app } from './js/reducers/app'
import { getInitialItems } from "./js/utils/getInitialItems"

const thunk = require('redux-thunk').default
const initialState = {
  channelManagement: {
    channelList: getInitialItems()
  },
  // editedItemId: false
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunk, logger]

const store = createStore(app, initialState, composeEnhancers(
  applyMiddleware(...middleware)
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
