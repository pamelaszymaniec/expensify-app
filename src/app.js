import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashboradPage = () => (
    <div>
        <p>This is from my dashboard component</p>

    </div>
);

const AddExpensePage = () => (
    <div>
        <p>This is from my add expense component</p>

    </div>
);

const EditExpensePage = () => (
    <div>
        <p>This is from my edit component</p>

    </div>
);

const HelpPage = () => (
    <div>
        <p>This is from my help componentd</p>

    </div>
);

const NotFoundPage = () => (
    <div>
        <p>404!</p>

    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboradPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>

        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

