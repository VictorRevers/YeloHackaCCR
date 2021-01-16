import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Landing } />
                <Route path="/login" component={ Login } />
                <Route path="/register" component={ Register } />
            </Switch>
        </BrowserRouter>
    );
}