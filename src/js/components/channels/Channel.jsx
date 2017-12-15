import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const Channel = (props) => {
    return (
        <Link to={`/channels/${props.item.id}`}>
            <li className="Channel" onClick={props.onSelect}>
                <span onClick={props.onStartEditing}>{props.item.name}</span>
                <i className="icon-trash" onClick={props.onDelete}/>
            </li>
        </Link>

    )
}

Channel.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        customData: PropTypes.object
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onStartEditing: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
};

export {Channel}