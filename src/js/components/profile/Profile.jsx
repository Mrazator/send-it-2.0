import React from 'react'
import {LogoutBtn} from "../../containers-redux/profile/LogoutBtn";

const Profile = () => {
    return (
        <div className="Profile">
            <h1>Profile page</h1>
            <img className="profile-picture" src="" alt="profile"/>
            <input value="nickname" type="text"/>
            <LogoutBtn />
        </div>
    )
}

export default Profile
