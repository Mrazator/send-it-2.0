import React from 'react'
import PropTypes from 'prop-types'
import {Route} from "react-router-dom";

const Body = (props) => {
    return (
        <Route path={`/channels/:${props.itemId}`}>
            <div className="Body"/>
        </Route>
    )
}

Body.propTypes = {
    itemId: PropTypes.number.isRequired
}

export default Body
