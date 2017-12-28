import * as React from 'react'
import * as PropTypes from 'prop-types'
import AdvancedLoader from 'react-loader-advanced'
import { SavingSpinner } from './SavingSpinner.jsx'

const LoadingMessage = () => (
  <div>
    <div>
      <SavingSpinner />
    </div>
  </div>
)

const Loader = ({ children, isLoading }) => (
  <AdvancedLoader
    show={isLoading}
    message={<LoadingMessage />}
    hideContentOnLoad
  >
    {children}
  </AdvancedLoader>
)

Loader.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export { Loader }
