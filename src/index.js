import React from 'react'
import ReactDOM from 'react-dom'
import {ConnectedRouter} from 'connected-react-router'
import {Provider} from 'react-redux'

import registerServiceWorker from './js/services/registerServiceWorker'
import {LayoutSelector} from "./js/containers-redux/LayoutSelector"
import {createStore} from './js/utils/createStore'
import {createHistory} from './js/utils/createHistory'

import './styles/config/normalize.css'
import './styles/index.css'

const history = createHistory()
const store = createStore(history)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <LayoutSelector/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
