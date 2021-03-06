import React from 'react'
import * as PropTypes from 'prop-types'

import { LogoutBtn } from '../../containers-redux/profile/LogoutBtn'
import { HeadInHelmet } from '../../containers-redux/shared/HeadInHelmet'
import { Details } from '../../containers-redux/profile/Details'
import { Loader } from '../../containers-redux/shared/Loader'
import { Avatar } from '../../containers-redux/profile/Avatar'
import { ROOT } from '../../constants/routes'
import { Link } from 'react-router-dom'

class Profile extends React.PureComponent {
  static propTypes = {
    fetchDetails: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchDetails()
  }

  render() {
    return (
      <div className="Profile">
        <HeadInHelmet />
        <div className="go-back">
          <Link
            to={ROOT}
          >
            <button>go back</button>
          </Link>
        </div>
        <div className="left-col">
          <h1>Profile page</h1>
          <LogoutBtn />
        </div>
        <div className="user-options">
          <div className="profile-img">
            <Loader stateLoadingSelector={state => state.profile.isLoadingAvatar}>
              <Avatar className="profile-picture" />
            </Loader>
          </div>
          <Loader stateLoadingSelector={state => state.profile.isLoadingDetails}>
            <Details />
          </Loader>
        </div>
      </div>
    )
  }
}

export { Profile }
