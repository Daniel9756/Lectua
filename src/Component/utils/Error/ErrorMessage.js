import React from 'react';
import PropTypes from 'prop-types';


const ErrorMessage = (props) => (
    <div>
        <p style={{color: "#e84118"}}> {props.errorValue} </p>
    </div>
)

ErrorMessage.propTypes = {
    errorValue: PropTypes.string
}

ErrorMessage.defaultProps = {
    errorText: null
}

export default ErrorMessage;