import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../../styles/components/ChannelEdited.css'

class ChannelEdited extends Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      customData: PropTypes.string
    }).isRequired,
    onCancelEditing: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      editedItem: props.item
    }

    this._onNameChange = this._onNameChange.bind(this)
  }

  _onNameChange(event) {
    const value = event.target.value

    this.setState((previousState) => ({
      editedItem: {
        ...previousState.editedItem,
        name: value
      }
    }))
  }

  render() {
    return (
      <li className="ChannelEdited">
        <input
          type="text"
          className="name"
          value={this.state.editedItem.name}
          onChange={this._onNameChange}
        />
        <div>
          <i
            className="icon-ok"
            onClick={() => this.props.onSave(this.state.editedItem)}
            disabled={this.state.editedItem === this.props.item}
          />
          <i
            className="icon-cancel"
            onClick={this.props.onCancelEditing}
          />
        </div>

      </li>
    )
  }
}

export default ChannelEdited