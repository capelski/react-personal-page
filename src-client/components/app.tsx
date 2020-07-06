import React from 'react';
import { Route, useLocation, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { ArticleLoader } from './article-loader';
import { Blog } from './blog';
import { Error } from './error';
import { Home } from './home';
import { Portfolio } from './portfolio';

const routes = [
    { path: '/', name: 'Home', component: Home, pattern: /^\/$/ },
    {
        path: '/blog/:articleId',
        name: 'Article',
        component: ArticleLoader,
        pattern: /^\/blog\/([^\/]+)\/?$/
    },
    { path: '/blog', name: 'Blog', component: Blog, pattern: /^\/blog\/?$/ },
    { path: '/error', name: 'Error', component: Error, pattern: /^\/error$/ },
    { path: '/portfolio', name: 'Portfolio', component: Portfolio, pattern: /^\/portfolio\/?$/ }
];

const supportedRoutes = routes.map((route) => route.pattern);

interface AppProps {
    isServerRendered: boolean;
}

export const App: React.FC<AppProps> = (props) => {
    const location = useLocation();

    return (
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
                            <route.component {...childrenProps} />
                        </CSSTransition>
                    )}
                </Route>
            ))}

            {supportedRoutes.some((route) => route.test(location.pathname)) ? null : (
                <Redirect to="/error" />
            )}
        </div>
    );
};
