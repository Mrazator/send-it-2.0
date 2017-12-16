import * as React from "react";
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {Field} from 'redux-form'
import {SelectComponent} from "../shared/SelectComponent";

export class AddUser extends React.PureComponent {
    static propTypes = {
        users: PropTypes.instanceOf(Immutable.List).isRequired,
        channel: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        onLoadUsers: PropTypes.func.isRequired,
        selected: PropTypes.bool.isRequired
    }

    componentDidMount() {
        this.props.onLoadUsers()
    }

    render() {
        const options = this.props.users.map(x => ({value: x.email, label: x.email})).toArray()

        return (
            <div className="AddUser">
                <form onSubmit={this.props.handleSubmit} className={this.props.selected && "selected"}>
                    <Field
                        name="users"
                        multi={true}
                        options={options}
                        placeholder="Select users"
                        component={SelectComponent}
                    />

                    <button type="submit"
                            className="icon-ok"
                            title="add"
                    />
                </form>
            </div>
        )
    }
}