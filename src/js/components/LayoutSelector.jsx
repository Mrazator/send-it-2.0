import React from 'react'
import * as PropTypes from 'prop-types'
import {Route, Switch} from 'react-router-dom'

import {ROOT, PROFILE, LOGIN} from '../constants/routes'

import App from "./app/App"
import { Profile } from '../../js/containers-redux/profile/Profile.jsx'
import Login from "./login/Login"
import {AuthenticatedRoute} from "./app/AuthenticatedRoute"

const LayoutSelector = ({isAuthenticated}) => {
    return (
        <div id="Layout">
            <Switch>
                <Route exact path={LOGIN} component={Login}/>
                <AuthenticatedRoute exact path={ROOT} component={App} isAuthenticated={isAuthenticated}/>
                <AuthenticatedRoute exact path={PROFILE} component={Profile} isAuthenticated={isAuthenticated}/>
            </Switch>
        </div>
    )
}

LayoutSelector.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

export {LayoutSelector}
