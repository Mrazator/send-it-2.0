import * as React from 'react';
import * as PropTypes from 'prop-types';
import { uuid } from '../../utils/uuid';

class Input extends React.Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        required: PropTypes.bool,
        input: PropTypes.shape({
            value: PropTypes.string.isRequired,
        }).isRequired,
        meta: PropTypes.shape({
            error: PropTypes.string,
            touched: PropTypes.bool.isRequired,
            invalid: PropTypes.bool.isRequired,
            valid: PropTypes.bool.isRequired,
        }).isRequired,
    };

    componentWillMount() {
        this.setState({ componentId: uuid() });
    }

    render() {
        const inputName = `input_${this.state.componentId}`;
        const {
            valid,
            invalid,
            touched,
            error: errorMessage
        } = this.props.meta;

        const isValid = valid && touched;
        const isInvalid = invalid && touched;

        return (
            <div>
                <div
                    className="input-group"
                    title={isInvalid ? errorMessage : undefined}
                >
                    <div className="input-group-addon">
                        <span className={`glyphicon`} aria-hidden="true"/>
                    </div>
                    <input
                        {...this.props.input}
                        type={this.props.type}
                        className="form-control"
                        id={inputName}
                        placeholder={this.props.placeholder}
                        readOnly={this.props.readOnly}
                    />
                    <span
                        aria-hidden="true"
                        title={errorMessage}
                    >
                    </span>
                </div>
                {invalid && (
                    <span className="sr-only">
                        {errorMessage}
                    </span>
                )}
            </div>
        );
    }
}

export { Input };