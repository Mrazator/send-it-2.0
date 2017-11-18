import Immutable from 'immutable'
import PropTypes from 'prop-types'
import React from 'react'

export class SavingStatus extends React.PureComponent {

    static propTypes = {
        list: PropTypes.instanceOf(Immutable.List).isRequired,
        isSaving: PropTypes.bool.isRequired,
        save: PropTypes.func.isRequired
    };

    componentWillUpdate(nextProps) {
        if (this.props.list !== nextProps.list) {
            this.props.save()
        }
    }

    render() {
        const text = this.props.isSaving ? 'saving...' : 'all saved'

        return (
            <div className="saving">
                {text}
            </div>
        )
    }
}