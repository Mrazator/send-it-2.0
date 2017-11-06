import React from 'react'
import PropTypes from 'prop-types'

const Channel = (props) => {
    return (
        <li className="Channel">
            <span onClick={props.onStartEditing}>{props.item.name}</span>
            <i className="icon-trash" onClick={props.onDelete}/>
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

export {Channel}