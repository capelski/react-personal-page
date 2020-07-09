import React, { useState } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { articles } from './articles';
import { ArticleId } from './articles/article-id';
import { Language } from './articles/language';
import { blogRoute, articleRoute, routes, supportedRoutes } from './routes';
import { transitionsDuration } from './variables';

interface AppProps {
    isServerRendered: boolean;
}

const getInitialArticleId = (location: { pathname: string }) => {
    // If starting the application in an article url, we need to set the selectedArticleId.
    // Doing this initialization in a useEffect will fail on the server side rendering
    const urlParts = location.pathname.split('/');
    return urlParts.length > 2 && urlParts[1] === 'blog' ? (urlParts[2] as ArticleId) : undefined;
};

// TODO Initialize language based on the location also, once articles receive the language in the url

export const App: React.FC<AppProps> = (props) => {
    const location = useLocation();
    const [activeArticles, setActiveArticles] = useState(articles);
    const [selectedArticleId, setSelectedArticleId] = useState<ArticleId | undefined>(
        getInitialArticleId(location)
    );
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.en);

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
