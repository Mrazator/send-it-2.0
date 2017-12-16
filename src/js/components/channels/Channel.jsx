import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const Channel = (props) => {
    return (
        <Link to={`/channels/${props.item.id}`}>
            <li onClick={props.onSelect} className={props.selected ? "Channel selected" : "Channel"}>
                <span onClick={props.onStartEditing}>{props.item.name}</span>
                <div>
                    <i className="icon-trash" onClick={props.onDelete}/>
                    <i className={props.isAddingUser ? "icon-plus adding" : "icon-plus"} onClick={props.isAddingUser ? props.onAddUserCancel :props.onAddUser}/>
                </div>
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
    selected: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onStartEditing: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    onAddUser: PropTypes.func.isRequired,
    onAddUserCancel: PropTypes.func.isRequired,
    isAddingUser: PropTypes.bool.isRequired

};

export {Channel}