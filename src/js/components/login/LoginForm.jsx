import * as React from 'react'
import * as PropTypes from 'prop-types'
import {uuid} from '../../utils/uuid'

class LoginForm extends React.PureComponent {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.setState(() => ({componentId: uuid()}))
    }

    render() {
        const {componentId} = this.state;
        const loginId = `${componentId}_login`;

        return (
            <form>
                <label htmlFor={loginId}>
                    e-mail
                </label>
                <input
                    type="email"
                    id={loginId}
                    placeholder="email@email.com"
                />
                <button
                    type="button"
                    onClick={this.props.onSubmit}
                >
                    Log in
                </button>
            </form>
        );
    }
}

export {LoginForm}