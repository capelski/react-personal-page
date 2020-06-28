import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/home';

import './style/main.scss';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
);

const appPlaceholder = document.getElementById('app-placeholder');
ReactDOM.render(<App />, appPlaceholder);
