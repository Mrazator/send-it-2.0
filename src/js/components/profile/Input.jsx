import * as React from 'react'
import * as PropTypes from 'prop-types'

import { uuid } from '../../utils/uuid'

class Input extends React.Component {
    static propTypes = {
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired
    }

    componentWillMount() {
      this.setState({ componentId: uuid() })
    }

    render() {
      const inputName = `input_${this.state.componentId}`

      return (
        <div className="form-group">
          <input
            id={inputName}
            className="form-control"
            type={this.props.type}
            placeholder={this.props.placeholder}
          />
        </div>
      )
    }
}

export { Input }
