import * as React from 'react'
import * as PropTypes from 'prop-types'
import { uuid } from '../../utils/uuid'

class LoginForm extends React.PureComponent {
    static propTypes = {
      onSubmit: PropTypes.func.isRequired
    }

    constructor(props) {
      super(props)

      this.state = {
        componentId: 0,
        email: ''
      }

      this._onNameChange = this._onNameChange.bind(this)
    }

    componentWillMount() {
      this.setState(() => ({ componentId: uuid() }))
    }

    _onNameChange(event) {
      const value = event.target.value

      this.setState({ email: value })
    }

    render() {
      const { componentId } = this.state
      const loginId = `${componentId}_login`

      return (
        <form>
          <input
            type="email"
            value={this.state.email}
            id={loginId}
            onChange={this._onNameChange}
            placeholder="email@email.com"
          />
          <button
            type="submit"
            onClick={() => this.props.onSubmit(this.state.email)}
          >
                    Log in
          </button>
        </form>
      )
    }
}

export { LoginForm }
