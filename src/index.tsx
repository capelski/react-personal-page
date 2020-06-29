import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Blog } from './components/blog';
import { Home } from './components/home';
import { Portfolio } from './components/portfolio';

import './style/main.scss';

const routes = [
    { path: '/blog', name: 'Blog', component: Blog },
    { path: '/portfolio', name: 'Portfolio', component: Portfolio },
    { path: '/', name: 'Home', component: Home }
];

const App = () => (
    <BrowserRouter>
        {routes.map((route) => (
            <Route
                key={route.path}
                exact={true}
                path={route.path}
                children={(childrenProps) => (
                    <CSSTransition
                        in={childrenProps.match != null}
                        // Keep in sync with variables.scss $transitionsDuration
                        timeout={1000}
                        classNames="page"
                        unmountOnExit={true}
                    >
                        <route.component />
                    </CSSTransition>
                )}
            />
        ))}
        <Route path="/react-personal-page">
            <Redirect to="/" />
        </Route>
    </BrowserRouter>
);

const appPlaceholder = document.getElementById('app-placeholder');
ReactDOM.render(<App />, appPlaceholder);
