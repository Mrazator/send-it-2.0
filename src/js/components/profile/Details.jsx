import * as React from 'react'
import * as PropTypes from 'prop-types'
import {Field} from 'redux-form'

import {Input} from './Input.jsx'
import {UpdatePane} from './UpdatePanel'
import {validateNonEmptyness} from '../../utils/validation'
import * as formStates from '../../constants/formStates'

const validateFullName = validateNonEmptyness('Nickname')

const getFormState = (dirty, valid) => {
  if (!dirty) {
    return formStates.NOT_CHANGED
  }

  if (!valid) {
    return formStates.INVALID
  }

  return formStates.SAVEAVBLE
}

const Details = ({handleSubmit, valid, dirty}) => (
  <form onSubmit={handleSubmit}>
    <Field
      type="text"
      placeholder="Nickname"
      required
      component={Input}
      validate={validateFullName}
    />
    <button type="submit">
      Update details
    </button>

    <UpdatePane formState={getFormState(dirty, valid)}/>
  </form>
)

Details.propTypes = {
  valid: PropTypes.bool.isRequired,
  dirty: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export {Details}