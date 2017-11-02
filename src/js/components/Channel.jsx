import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/components/Channel.css'

function Channel(props) {
    return (
        <li className="Channel">
            <span onClick={() => props.onStartEditing(props.item.id)}>{props.item.name}</span>
            <i className="icon-trash" onClick={() => props.onDelete(props.item.id)}/>
        </li>
    )
}

Channel.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        customData: PropTypes.string
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onStartEditing: PropTypes.func.isRequired
};

export default Channel