import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../auth/login';

function routes() {
    return <Route path="/" exact component={Login} />;
}

export default withRouter(routes);
