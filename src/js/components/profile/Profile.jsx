import React from 'react'

import {LogoutBtn} from "../../containers-redux/profile/LogoutBtn"
import {HeadInHelmet} from '../../containers-redux/shared/HeadInHelmet'

const Profile = () => {
    return (
        <div className="Profile">
            <HeadInHelmet/>
            <h1>Profile page</h1>
            <img className="profile-picture" src="" alt="profile"/>
            <input value="nickname" type="text"/>
            <LogoutBtn />
        </div>
    )
}

export default Profile
