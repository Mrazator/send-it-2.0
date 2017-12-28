import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { ChannelEdited as ChannelEditedComponent, getTitleInput } from '../../components/channels/ChannelEdited'

class ChannelEdited extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      customData: PropTypes.object
    }).isRequired,
    selected: PropTypes.bool.isRequired,
    onCancelEditing: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      editedItem: props.item
    }

    this._onNameChange = this._onNameChange.bind(this)
    this._handleEscEnterKey = this._handleEscEnterKey.bind(this)
  }

  componentDidMount() {
    const textLength = getTitleInput().value.length
    getTitleInput().focus()
    getTitleInput().setSelectionRange(textLength, textLength)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.item !== nextProps.item) {
      this.setState({
        editedItem: nextProps.item
      })
    }
  }

  _handleEscEnterKey(e) {
    if (e.keyCode === 13) { // Enter key
      this.props.onUpdate(this.state.editedItem)
    } else if (e.keyCode === 27) { // ESC key
      this.props.onCancelEditing()
    }
  }

  _onNameChange(event) {
    const { target: { value } } = event

    this.setState(previousState => ({
      editedItem: {
        ...previousState.editedItem,
        name: value
      }
    }))
  }

  render() {
    return (
      <ChannelEditedComponent
        item={this.state.editedItem}
        onCancelEditing={this.props.onCancelEditing}
        disabled={this.props.item === this.state.editedItem}
        onUpdate={() => this.state.editedItem.name && this.props.onUpdate(this.state.editedItem)}
        onNameChange={this._onNameChange}
        onHandleKey={this.state.editedItem.name && this._handleEscEnterKey}
        selected={this.props.selected}
      />
    )
  }
}

export { ChannelEdited }
