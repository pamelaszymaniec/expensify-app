import React from 'react';
import ExpenseDashboradPage from '../components/ExpenseDashboradPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';

import {BrowserRouter, Route, Switch} from 'react-router-dom';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/dashboard" component={ExpenseDashboradPage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>

            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;