import * as React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import { Field } from 'redux-form'
import { SelectComponent } from '../shared/SelectComponent'

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
      const options = this.props.users
        .filter(x => x.email !== this.props.channel.customData.owner)
        .map(x => ({ value: x.email, label: x.email }))
        .toArray()

      const initialValues = this.props.channel.customData.users.length !== 0
        ? this.props.channel.customData.users.map(x => ({ value: x, label: x }))
        : null

      return (
        <div className="AddUser">
          <form onSubmit={this.props.handleSubmit} className={this.props.selected && 'selected'}>
            <Field
              id="users"
              name="users"
              multi
              options={options}
              placeholder="Select users"
              component={SelectComponent}
              initialValues={{ users: initialValues }}
            />

            <button
              type="submit"
              className="icon-ok"
              title="add"
            />
          </form>
        </div>
      )
    }
}
