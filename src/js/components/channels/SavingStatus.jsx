import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import { SavingSpinner } from '../shared/SavingSpinner.jsx'

export class SavingStatus extends React.PureComponent {

    static propTypes = {
        channels: PropTypes.instanceOf(Immutable.List).isRequired,
        isSaving: PropTypes.bool.isRequired,
        save: PropTypes.func.isRequired
    };

    componentWillUpdate(nextProps) {
        if (this.props.channels !== nextProps.channels) {
            this.props.save()
        }
    }

    render() {
        const text = this.props.isSaving ? <SavingSpinner/> : 'all saved'

        return (
            <div className="saving">
                {text}
            </div>
        )
    }
}