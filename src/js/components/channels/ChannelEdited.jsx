import React from 'react'
import PropTypes from 'prop-types'

let titleInput
const getTitleInput = () => titleInput

const ChannelEdited = props => (
  <li className={props.selected ? 'ChannelEdited selected' : 'ChannelEdited'}>
    <input
      type="text"
      className="name"
      value={props.item.name}
      onChange={props.onNameChange}
      onKeyDown={props.onHandleKey}
      ref={input => titleInput = input}
    />
    <div>
      <i
        className="icon-ok"
        onClick={props.onUpdate}
        disabled={props.disabled}
        title="save"
      />
      <i
        className="icon-cancel"
        onClick={props.onCancelEditing}
        title="cancel"
      />
    </div>
  </li>
)

ChannelEdited.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    customData: PropTypes.object
  }).isRequired,
  disabled: PropTypes.bool.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onCancelEditing: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onHandleKey: PropTypes.func.isRequired
}

export { ChannelEdited, getTitleInput }
