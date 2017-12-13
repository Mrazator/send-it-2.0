import * as React from 'react';
import * as PropTypes from 'prop-types';

const Avatar = (props) => (
    <div
        className="panel panel-default"
        onMouseEnter={props.toggleOverlay}
        onDragOver={props.toggleOverlay}
    >
        <div className="Avatar img-rounded" alt="Profile picture"/>
    </div>
);

Avatar.propTypes = {
    toggleOverlay: PropTypes.func.isRequired,
};

export { Avatar };