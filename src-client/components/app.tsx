import React, { useState } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { articles } from './articles';
import { ArticleId } from './articles/article-id';
import { Language } from './articles/language';
import { articleRoute, blogRoute, homeRoute, routes, supportedRoutes } from './routes';
import { transitionsDuration } from './variables';

interface AppProps {
    isServerRendered: boolean;
}

// If starting the application in an article url, we need to set the selectedArticleId.
// Doing this initialization in a useEffect will fail on the server side rendering
const getInitialArticleId = (location: { pathname: string }) => {
    const urlParts = location.pathname.split('/');
    return urlParts.length > 2 && urlParts[1] === articleRoute.name
        ? (urlParts[2] as ArticleId)
        : undefined;
};

// If starting the application in an blog/article url, we need to set the selectedLanguage.
// Doing this initialization in a useEffect will fail on the server side rendering
const getInitialLanguage = (location: { pathname: string }): Language => {
    const urlParts = location.pathname.split('/');
    return urlParts.length > 3 && urlParts[1] === articleRoute.name
        ? (urlParts[3] as Language)
        : urlParts.length > 2 && urlParts[1] === blogRoute.name
        ? (urlParts[2] as Language)
        : Language.en;
};

export const App: React.FC<AppProps> = (props) => {
    const location = useLocation();
    const [activeArticles, setActiveArticles] = useState(articles);
    const [selectedArticleId, setSelectedArticleId] = useState<ArticleId | undefined>(
        getInitialArticleId(location)
    );
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(
        getInitialLanguage(location)
    );

    const selectArticle = (articleId: ArticleId) => {
        setSelectedArticleId(articleId);
    };

    const selectLanguage = (language: Language) => {
        setSelectedLanguage(language);
        const nextArticles = articles.filter(
            (article) => article.metadata.languages.indexOf(language) > -1
        );
        setActiveArticles(nextArticles);
    };

    homeRoute.additionalProps = {
        selectedLanguage
    };

    blogRoute.additionalProps = {
        activeArticles,
        selectArticle,
        selectedLanguage,
        selectLanguage
    };

    articleRoute.additionalProps = {
        activeArticles,
        selectArticle,
        selectedArticleId,
        selectedLanguage
    };

    return (
        <div className={`app-container${props.isServerRendered ? ' server-rendered' : ''}`}>
            {routes.map((route) => (
                <Route key={route.path} exact={true} path={route.path}>
                    {(childrenProps) => (
                        <CSSTransition
                            in={childrenProps.match != null}
                            timeout={transitionsDuration}
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
