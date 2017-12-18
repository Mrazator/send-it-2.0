import Select from 'react-select'
import * as React from 'react'
import PropTypes from 'prop-types'
import 'react-select/dist/react-select.css'

export const SelectComponent = props => (
  <Select
    {...props}
    value={props.input.value ? props.input.value : props.initialValues.users}
    options={props.options}
    placeholder={props.placeholder}
    onBlur={() => props.input.onBlur(props.input.value)}
    onChange={value => props.input.onChange(value)}
    multi={props.multi}
  />
)

SelectComponent.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  multi: PropTypes.bool.isRequired,
  initialValues: PropTypes.shape({
    users: PropTypes.array.isRequired
  }).isRequired,
  input: PropTypes.shape({
    // value: PropTypes.array,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
  }).isRequired
}
