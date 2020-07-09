import React, { useState } from 'react';
import { Route, useLocation, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { articles } from './articles';
import { Language } from './articles/language';
import { blogRoute, articleRoute, routes, supportedRoutes } from './routes';

interface AppProps {
    isServerRendered: boolean;
}

export const App: React.FC<AppProps> = (props) => {
    const location = useLocation();
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.en);
    const [activeArticles, setActiveArticles] = useState(articles);

    const selectedLanguageHandler = (language: Language) => {
        setSelectedLanguage(language);
        const nextArticles = articles.filter(
            (article) => article.metadata.languages.indexOf(language) > -1
        );
        setActiveArticles(nextArticles);
    };

    blogRoute.additionalProps = {
        activeArticles,
        selectedLanguage,
        setSelectedLanguage: selectedLanguageHandler
    };

    articleRoute.additionalProps = {
        selectedLanguage
    };

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
                            <route.component
                                {...childrenProps}
                                {...(route.additionalProps ? route.additionalProps : {})}
                            />
                        </CSSTransition>
                    )}
                </Route>
            ))}

            {supportedRoutes.some((route) => route.test(location.pathname)) ? null : (
                <Route path={location.pathname}>
                    <Redirect from={location.pathname} to="/error" />
                </Route>
            )}
        </div>
    );
};
