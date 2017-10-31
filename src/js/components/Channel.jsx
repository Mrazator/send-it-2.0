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
        onDelete: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="Channel">
                <li>{this.props.item.name}</li>
                <i className="icon-trash" onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>
        )
    }
}

export default Channel