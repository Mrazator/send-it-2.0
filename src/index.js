import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import {Provider} from 'react-redux'

import Layout from "./js/components/Layout"
import registerServiceWorker from './js/services/registerServiceWorker'

import './styles/config/normalize.css'
import './styles/index.css'

import { createHistory } from './js/utils/createHistory'
import { createStore } from './js/utils/createStore'

const history = createHistory()
const store = createStore(history)


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
