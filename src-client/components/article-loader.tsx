import React, { useState } from 'react';
import { articles } from './articles';
import { RouteChildrenProps, NavLink } from 'react-router-dom';
import { Article } from './article';
import { Language } from './articles/language';
import { Error } from './error';

export const ArticleLoader: React.FC<RouteChildrenProps<{ articleId: string }>> = (props) => {
    const [articleId] = useState(
        props.match && props.match.params && props.match.params['articleId']
    );

    const article = articleId
        ? articles.find((article) => article.metadata.id === articleId)
        : undefined;

    return article ? (
        <div className="article-container">
            <div className="section-content article-content">
                {/* TODO Provide the current language */}
                <Article {...article} preview={false} selectedLanguage={Language.en} />
            </div>
            <div className="section-links article-links">
                <NavLink to="/blog" className="link">
                    ⬅️ Back
                </NavLink>
            </div>
        </div>
    ) : (
        <Error />
    );
};
