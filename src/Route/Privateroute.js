import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../utility/Index';

function Privateroute({component : Component , ...rest}) {
    return (
        <Route {...rest} render={props =>(
            isLogin() ?
            <Component {...props}/> 
            :
            <Redirect to={'/login-signup'} />
        )}
        />
    );
}

export default Privateroute;