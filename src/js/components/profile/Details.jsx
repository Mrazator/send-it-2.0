import * as React from 'react'
import * as PropTypes from 'prop-types'
import {Field} from 'redux-form'

import {Input} from './Input.jsx'
import {UpdatePane} from './UpdatePanel'
import {validateNonEmptyness} from '../../utils/validation'
import * as formStates from '../../constants/formStates'

const validateFullName = validateNonEmptyness('Nickname')

const getFormState = (dirty, valid, submitting) => {
  if (!dirty) {
    return formStates.NOT_CHANGED
  }

  if (!valid) {
    return formStates.INVALID
  }
    if(submitting) {
        return formStates.SAVING_NOW;
    }

  return formStates.SAVEAVBLE
}

const Details = ({handleSubmit, valid, dirty, submitting}) => (
  <form onSubmit={handleSubmit}>
    <Field
      type="text"
      name="text"
      placeholder="email"
      required
      component={Input}
      validate={validateFullName}
    />
    <button type="submit">
      Update details
    </button>

    <UpdatePane formState={getFormState(dirty, valid,submitting)}/>
  </form>
)

Details.propTypes = {
  valid: PropTypes.bool.isRequired,
  dirty: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export {Details}