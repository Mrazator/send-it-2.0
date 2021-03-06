import React from 'react'
import PropTypes from 'prop-types'

const LogoutButton = ({ onClick }) => (
  <button
    type="button"
    className="btn btn-danger btn-md"
    onClick={onClick}
  >
        logout
  </button>
)

LogoutButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export { LogoutButton }
