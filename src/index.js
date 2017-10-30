/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/config/normalize.css'
import './styles/index.css'
import App from './js/components/App'
import registerServiceWorker from './js/services/registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
