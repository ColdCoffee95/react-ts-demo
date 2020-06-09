import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import GlobalLayout from '../components/GlobalLayout';

const RouterDOM = (): JSX.Element => {
    return <Router>
        <Route path='/'>
            <GlobalLayout footer='1' />
        </Route>
    </Router>;
};
export default RouterDOM;