import React from 'react'
import {Link} from "react-router-dom"
import {PROFILE} from "../../constants/routes"


const Settings  = () => {
    return (
        <div className="Settings">
            <Link to={PROFILE}><i className="icon-user"/></Link>
        </div>
    )
}

export default Settings
