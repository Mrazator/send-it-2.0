import React, {Component} from 'react'
import Immutable from 'immutable'
import PropTypes from 'prop-types'
import { Channels as ChannelsComponent } from "../../components/channels/Channels"

class Channels extends Component {

      static propTypes = {
        list: PropTypes.instanceOf(Immutable.List).isRequired,
        onCreate: PropTypes.func.isRequired,
        onUpdate: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
        editedItemId: PropTypes.string,
        onStartEditing: PropTypes.func.isRequired,
        onCancelEditing: PropTypes.func.isRequired
      }

    constructor(props) {
        super(props)

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

    render() {
        return (
            <ChannelsComponent
                list={this.props.list}
                editedItemId={this.props.editedItemId}
                onDelete={this.props.onDelete}
                onUpdateItem={this.props.onUpdate}
                onCreateNew={this.props.onCreate}
                onStartEditing={this.props.onStartEditing}
                onCancelEditing={this.props.onCancelEditing}
            />
        )
    }
}

export default Channels
