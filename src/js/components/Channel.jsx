import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../../styles/components/Channel.css'

class Channel extends Component {
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            customData: PropTypes.string
        }).isRequired,
        onDelete: PropTypes.func.isRequired,
        onStartEditing: PropTypes.func.isRequired
    }

    render() {
        return (
            <li className="Channel">
                <span onClick={() => this.props.onStartEditing(this.props.item.id)}>{this.props.item.name}</span>
                <i className="icon-trash" onClick={() => this.props.onDelete(this.props.item.id)}/>
            </li>
        )
    }
}

export default Channel