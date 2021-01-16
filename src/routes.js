import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import SchoolRegister from './pages/Register/SchoolRegister';
import CompanyRegister from './pages/Register/CompanyRegister';
import StudentProfile from './pages/Student/StudentProfile';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Landing } />
                <Route path="/login" component={ Login } />
                <Route path="/register" component={ Register } />
                <Route path="/schoolregister" component={ SchoolRegister } />
                <Route path="/companyregister" component={ CompanyRegister } />
                <Route path="/studentprofile" component={ StudentProfile } />
            </Switch>
        </BrowserRouter>
    );
}