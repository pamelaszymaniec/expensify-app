import React from 'react';
import ExpenseDashboradPage from '../components/ExpenseDashboradPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
// import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch, Router} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>

            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboradPage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                {/*<Route path="/help" component={HelpPage}/>*/}
                <Route component={NotFoundPage}/>

            </Switch>
        </div>

    </Router>
);

export default AppRouter;