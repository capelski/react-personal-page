import React, { useState } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { articles } from './articles';
import { ArticleCategory } from './articles/article-category';
import { ArticleId } from './articles/article-id';
import { articleRoute, blogRoute, routes, supportedRoutes } from './routes';
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

// TODO If the browser navigation buttons are used, we might need to update the selectedArticleId

const getInitialCategory = (articleId: string | undefined) => {
    let initialCategory = ArticleCategory.tech;

    if (articleId) {
        const article = articles.find((a) => a.metadata.id === articleId);
        if (article) {
            initialCategory = article.metadata.category;
        }
    }

    return initialCategory;
};

export const App: React.FC<AppProps> = (props) => {
    const location = useLocation();
    const [selectedArticleId, setSelectedArticleId] = useState<ArticleId | undefined>(
        getInitialArticleId(location)
    );
    const [selectedCategory, setSelectedCategory] = useState<ArticleCategory>(
        getInitialCategory(selectedArticleId)
    );

    const selectArticle = (articleId: ArticleId) => {
        setSelectedArticleId(articleId);
    };

    blogRoute.additionalProps = {
        selectArticle,
        selectedCategory,
        setSelectedCategory
    };

    articleRoute.additionalProps = {
        selectArticle,
        selectedArticleId,
        selectedCategory
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
