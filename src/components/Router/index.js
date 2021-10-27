import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import About from '../About';
import Explanation from '../Explanation';
import Landing from '../Landing';
import Overview from '../Overview';
import Subscribe from '../Subscribe';
import Warning from '../Warning';
import NavBar from '../NavBar';

/**
 * Functional Component that sets up the Router for the App.
 */
const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path={ROUTES.WARNING} component={Warning} />
                <Route path={ROUTES.EXPLANATION} component={Explanation} />
                <div>
                    <NavBar />
                    {/* DIVIDER */}
                    <br /><br />
                    {/* DIVIDER */}
                    <Route path={ROUTES.ABOUT} component={About} />
                    <Route exact path={ROUTES.LANDING} component={Landing} />
                    <Route path={ROUTES.OVERVIEW} component={Overview} />
                    <Route path={ROUTES.SUBSCRIBE} component={Subscribe} />
                </div>
            </Switch>
        </Router>
    )
  };

export default AppRouter;