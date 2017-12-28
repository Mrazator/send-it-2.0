import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {AddUserRedux} from '../../containers-redux/channels/AddUser'
import {ROOT} from '../../constants/routes'

const Channel = (props) => {
  const addUserBox = <AddUserRedux channel={props.item}/>
  const addUserBtn = props.selected &&
    (
      <i
        className={(props.isAddingUser && props.selected) ? 'icon-plus adding' : 'icon-plus'}
        onClick={(props.isAddingUser && props.selected) ? props.onAddUserCancel : props.onAddUser}
        title={(props.isAddingUser && props.selected) ? 'close' : 'add user'}
      />
    )
  const deleteBtn = props.item.customData.owner === props.loggedInUserEmail && (
    <Link to={ROOT}>
      <i
        className="icon-trash"
        onClick={props.onDelete}
        title="delete channel"
      />
    </Link>
  )

  return (
    <div>
      <div className="channel">
        <Link
          to={`/channels/${props.item.id}`}
          title="select channel"
        >
          <li
            onClick={props.onSelect}
            className={props.selected ? 'Channel selected' : 'Channel'}
          >
          <span
            onDoubleClick={props.onStartEditing}
            title="doubleclick - edit channel"
          >{props.item.name}
          </span>
          </li>
        </Link>
        <div>
          {deleteBtn}
          {addUserBtn}
        </div>
      </div>
      {(props.isAddingUser && props.selected) && addUserBox}
    </div>
  )
}

Channel.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    customData: PropTypes.object
  }).isRequired,
  loggedInUserEmail: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onStartEditing: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onAddUser: PropTypes.func.isRequired,
  onAddUserCancel: PropTypes.func.isRequired,
  isAddingUser: PropTypes.bool.isRequired
}

export {Channel}
