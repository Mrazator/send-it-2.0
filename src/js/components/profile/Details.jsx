import * as React from 'react'
import * as PropTypes from 'prop-types'
import {Field} from 'redux-form'

import * as formStates from '../../constants/formStates'
import {UpdatePane} from "./UpdatePanel";
// import {Input} from "./Input";

const getFormState = (dirty, valid, submitting) => {
    if (!dirty) {
        return formStates.NOT_CHANGED
    }

    if (!valid) {
        return formStates.INVALID
    }
    if (submitting) {
        return formStates.SAVING_NOW;
    }

    return formStates.SAVEAVBLE
}

const Details = ({initialValues, handleSubmit, valid, dirty, submitting}) => (
    <form className='Details' onSubmit={handleSubmit}>
        <label>nickname:</label>
        <Field
            type="text"
            name="customData"
            placeholder={initialValues.customData}
            component="input"
        />

        <UpdatePane formState={getFormState(dirty, valid, submitting)}/>
    </form>
)

Details.propTypes = {
    valid: PropTypes.bool.isRequired,
    dirty: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired
}

export {Details}