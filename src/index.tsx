import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/home';
import { Navigation } from './components/navigation';

import './style/main.scss';

const App = () => (
    <BrowserRouter>
        <div className="content">
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
        <Navigation />
    </BrowserRouter>
);

const appPlaceholder = document.getElementById('app-placeholder');
ReactDOM.render(<App />, appPlaceholder);
