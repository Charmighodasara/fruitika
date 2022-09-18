import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../utility/Index';

function Privateroute({component : Component , ...rest}) {
    const auth = useSelector(state => state.auth)
    return (
        <Route {...rest} render={props =>(
            auth.user !== '' ?
            <Component {...props}/> 
            :
            <Redirect to={'/login-signup'} />
        )}
        />
    );
}

export default Privateroute;