import React, { useContext } from 'react'
import { Redirect, Route } from "react-router-dom";

function Protected({ component: Component, ...restOfProps }) {

    const isPemmitted = localStorage.getItem("isPemmitted");
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isPemmitted ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    )
}

export default Protected
