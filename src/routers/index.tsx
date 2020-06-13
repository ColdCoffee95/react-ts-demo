import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import GlobalLayout from '../components/GlobalLayout';

const RouterDOM = (): JSX.Element => {
    return <Router>
        <GlobalLayout footer='1' />
    </Router>;
};
export default RouterDOM;