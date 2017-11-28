import React from 'react'

import {LogoutBtn} from "../../containers-redux/profile/LogoutBtn"
import {HeadInHelmet} from '../../containers-redux/shared/HeadInHelmet'
import {Details} from "../../containers-redux/profile/Details"

const Profile = () => {
    return (
        <div className="Profile">
            <HeadInHelmet/>
            <h1>Profile page</h1>
            <img className="profile-picture" src="" alt="profile"/>
            <Details/>
            <LogoutBtn />
        </div>
    )
}

export default Profile
