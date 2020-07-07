import React, { useState } from 'react';
import { articles } from './articles';
import { RouteChildrenProps, NavLink } from 'react-router-dom';
import { Article } from './article';
import { Language } from './articles/language';
import { Error } from './error';
import { SectionContainer } from './section-container';

export const ArticleLoader: React.FC<RouteChildrenProps<{ articleId: string }>> = (props) => {
    const [articleId] = useState(
        props.match && props.match.params && props.match.params['articleId']
    );

    const article = articleId
        ? articles.find((article) => article.metadata.id === articleId)
        : undefined;

    return article ? (
        <SectionContainer
            contentClasses="article-content"
            links={
                <React.Fragment>
                    <NavLink to="/blog" className="link">
                        Blog ➡️
                    </NavLink>
                </React.Fragment>
            }
            linksClasses="article-links"
            sectionName="article-container"
        >
            {/* TODO Provide the current language */}
            <Article {...article} preview={false} selectedLanguage={Language.en} />
        </SectionContainer>
    ) : (
        <Error />
    );
};
