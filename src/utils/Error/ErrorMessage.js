import React from 'react';
import PropTypes from 'prop-types';


const ErrorMessage = (props) => (
    <em style={{ color: "#e84118" }}> {props.errorValue} </em>
)

ErrorMessage.propTypes = {
    errorValue: PropTypes.string
}

ErrorMessage.defaultProps = {
    errorText: null
}

export default ErrorMessage;