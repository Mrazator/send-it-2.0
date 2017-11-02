import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../../../styles/components/ChannelEdited.css'
import { ChannelEdited as ChannelEditedComponent } from '../../components/channels/ChannelEdited';

class ChannelEdited extends PureComponent {
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            customData: PropTypes.string
        }).isRequired,
        onCancelEditing: PropTypes.func.isRequired,
        onUpdateItem: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            editedItem: props.item
        }

        this._onNameChange = this._onNameChange.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.item !== nextProps.item) {
            this.setState({
                editedItem: nextProps.item,
            })
        }
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
            <ChannelEditedComponent
                item={this.state.editedItem}
                onNameChange={this._onNameChange}
                onCancelEditing={this.props.onCancelEditing}
                onUpdateItem={() => this.props.onUpdateItem(this.state.editedItem)}
                disabled={this.props.item === this.state.editedItem}
            />
        )
    }
}

export default ChannelEdited