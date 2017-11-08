import React from 'react'
import ReactDOM from 'react-dom'

import App from './js/App'
import registerServiceWorker from './js/services/registerServiceWorker'

import './styles/config/normalize.css'
import './styles/index.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
