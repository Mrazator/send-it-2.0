import React from 'react'
import { Link } from 'react-router-dom'
import { PROFILE } from '../../constants/routes'


const Settings = () => (
  <div className="Settings">
    <Link to={PROFILE}>
      <i
        className="icon-user"
        title="profile"
      />
    </Link>
  </div>
)

export default Settings
