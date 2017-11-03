import React from 'react'
import PropTypes from 'prop-types'
import '../../../styles/components/ChannelEdited.css'

let titleInput;

const getTitleInput = () => titleInput;

const ChannelEdited = (props) => {

    return (
        <li className="ChannelEdited">
            <input
                type="text"
                className="name"
                value={props.item.name}
                onChange={props.onNameChange}
                onKeyDown={props.onHandleKey}
                ref={(input) => titleInput = input}
            />
            <div>
                <i
                    className="icon-ok"
                    onClick={props.onUpdateItem}
                    disabled={props.disabled}
                />
                <i
                    className="icon-cancel"
                    onClick={props.onCancelEditing}
                />
            </div>
        </li>
    )
}

ChannelEdited.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        customData: PropTypes.string
    }).isRequired,
    disabled: PropTypes.bool.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onCancelEditing: PropTypes.func.isRequired,
    onUpdateItem: PropTypes.func.isRequired,
    onHandleKey: PropTypes.func.isRequired
}

export {ChannelEdited, getTitleInput}