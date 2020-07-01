import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Blog } from './blog';
import { Home } from './home';
import { Portfolio } from './portfolio';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/blog', name: 'Blog', component: Blog },
    { path: '/portfolio', name: 'Portfolio', component: Portfolio }
];

interface AppProps {
    isServerRendered: boolean;
}

export const App: React.FC<AppProps> = (props) => (
    <div className={`app-container${props.isServerRendered ? ' server-rendered' : ''}`}>
        {routes.map((route) => (
            <Route key={route.path} exact={true} path={route.path}>
                {(childrenProps) => (
                    <CSSTransition
                        in={childrenProps.match != null}
                        // Keep in sync with variables.scss $transitionsDuration
                        timeout={1200}
                        classNames="page"
                        unmountOnExit={true}
                    >
                        <route.component />
                    </CSSTransition>
                )}
            </Route>
        ))}
    </div>
);
