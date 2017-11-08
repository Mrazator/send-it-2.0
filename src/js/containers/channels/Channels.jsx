import React, {Component} from 'react'
import Immutable from 'immutable'
import PropTypes from 'prop-types'
import { Channels as ChannelsComponent } from "../../components/channels/Channels"

class Channels extends Component {

      static propTypes = {
        list: PropTypes.instanceOf(Immutable.List).isRequired,
        onCreate: PropTypes.func.isRequired,
        onUpdate: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired
      }

    constructor(props) {
        super(props)

        this.state = {
            editedItemId: null
        }

        Channels._getDefaultTodoList = Channels._getDefaultTodoList.bind(this)
        Channels._loadInitialTodoList = Channels._loadInitialTodoList.bind(this)
        this._onCreateNew = this._onCreateNew.bind(this)
        this._onDelete = this._onDelete.bind(this)
        this._startEditing = this._startEditing.bind(this)
        this._cancelEditing = this._cancelEditing.bind(this)
        this._updateItem = this._updateItem.bind(this)
    }

    componentWillUpdate(nextProps) {
        if (this.props.list !== nextProps.list) {
            localStorage.setItem('channelList', JSON.stringify(nextProps.list.toJS()))
        }
    }

    _startEditing(itemId) {
        this.setState({
            editedItemId: itemId
        })
    }

    _cancelEditing() {
        this.setState({
            editedItemId: null
        })
    }

    render() {
        return (
            <ChannelsComponent
                list={this.state.list}
                editedItemId={this.state.editedItemId}
                onDelete={this.props.onDelete}
                onUpdateItem={this.props.onUpdate}
                onCreateNew={this.props.onCreate}
                onStartEditing={this._startEditing}
                onCancelEditing={this._cancelEditing}
            />
        )
    }
}

export default Channels
