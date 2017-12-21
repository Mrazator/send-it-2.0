import * as React from 'react'
import * as PropTypes from 'prop-types'

import * as formStates from '../../constants/formStates'
import { SavingSpinner } from '../shared/SavingSpinner.jsx'

const NoChangedDetails = () => (
  <div
    className="no-changed-details"
    role="alert"
  >
    Details outdated? Make a change…
  </div>
)

const InvalidDetails = () => (
  <div
    className="invalid-details"
    role="alert"
  >
    Fix red fields to allow update…
  </div>
)

const SubmitDetails = () => (
  <button
    type="submit"
    className="icon-ok"
    title="change nickname"
  />
)

const UploadingDetails = () => (
  <div
    className="well-sm alert-warning text-center"
    role="alert"
  >
    <SavingSpinner />
  </div>
)

const UpdatePane = ({ formState }) => {
  switch (formState) {
    case formStates.NOT_CHANGED:
      return <NoChangedDetails />

    case formStates.INVALID:
      return <InvalidDetails />

    case formStates.SAVEAVBLE:
      return <SubmitDetails />

    case formStates.SAVING_NOW:
      return <UploadingDetails />

    default:
      throw new Error(`Unknown form state "${formState}"`)
  }
}

UpdatePane.propTypes = {
  formState: PropTypes.string.isRequired
}

export { UpdatePane }
