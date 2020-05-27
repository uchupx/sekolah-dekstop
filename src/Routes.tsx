import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './app';
import LoginPage from './pages/login';

export default function Routes() {
    return (
        <App>
            <Switch>
                <Route path='/' component={LoginPage} />
            </Switch>
        </App>
    );
}