import React, { useContext } from 'react'
import { Redirect, Route } from "react-router-dom";
import { GlobalContext } from '../Context/Provider';

function Protected({ component: Component, ...rest }) {
    const {
        loginState: {
            login: { isPemmitted },
        },
        authState: {
            auth: { isAuthenticated },
        },
    } = useContext(GlobalContext);
    return (
        <Route
            {...rest}
            render={(props) =>
               (isPemmitted || isAuthenticated) ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    )
}

export default Protected
