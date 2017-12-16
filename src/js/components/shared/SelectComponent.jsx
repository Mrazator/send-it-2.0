import Select from 'react-select'
import * as React from "react";
import PropTypes from 'prop-types'
import 'react-select/dist/react-select.css';


export const SelectComponent = (props) => {
    return (
        <Select
            options={props.options}
            placeholder={props.placeholder}
            multi={props.multi}
            {...props.input}
        />
    )
}

SelectComponent.PropTypes = {
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
    multi: PropTypes.bool.isRequired
}