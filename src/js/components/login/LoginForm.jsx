import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { uuid } from '../../utils/uuid'

class LoginForm extends React.PureComponent {
    static propTypes = {
      handleSubmit: PropTypes.func.isRequired,
      submitting: PropTypes.bool.isRequired,
      pristine: PropTypes.bool.isRequired,
      valid: PropTypes.bool.isRequired
    }

    constructor(props) {
      super(props)

      this.state = {
        componentId: 0
      }
    }

    componentWillMount() {
      this.setState(() => ({ componentId: uuid() }))
    }

    render() {
      const { componentId } = this.state
      const loginId = `${componentId}_login`

      return (
        <form onSubmit={this.props.handleSubmit}>
          <Field
            type="email"
            name="email"
            id={loginId}
            placeholder="email@email.com"
            component="input"
          />

          <button
            type="submit"
            disabled={this.props.submitting || this.props.pristine || !this.props.valid}
          >
                    Log in
          </button>
        </form>
      )
    }
}

export { LoginForm }
