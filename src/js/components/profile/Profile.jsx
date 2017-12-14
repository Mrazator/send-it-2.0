import React from 'react'
import * as PropTypes from 'prop-types'

import {LogoutBtn} from "../../containers-redux/profile/LogoutBtn"
import {HeadInHelmet} from '../../containers-redux/shared/HeadInHelmet'
import {Details} from "../../containers-redux/profile/Details"
import {Loader} from "../../containers-redux/shared/Loader"
import {Avatar} from "../../containers-redux/profile/Avatar";

class Profile extends React.PureComponent {

    static propTypes = {
        fetchDetails: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.fetchDetails();
    }

    render() {
        return (
            <div className="Profile">
                <HeadInHelmet/>
                <h1>Profile page</h1>
                <div className="profile-img">
                    <Loader stateLoadingSelector={state => state.profile.isFetchingAvatar}>
                        <Avatar className="profile-picture"/>
                    </Loader>
                </div>
                <Loader stateLoadingSelector={state => state.profile.isFetchingDetails}>
                    <Details />
                </Loader>
                <LogoutBtn/>
            </div>
        )
    }
}

export { Profile }
