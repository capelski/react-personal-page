import React, { useState } from 'react';
import { articles } from './articles';
import { RouteChildrenProps, NavLink } from 'react-router-dom';
import { Article } from './article';
import { Language } from './articles/language';
import { Error } from './error';
import { SectionContainer } from './section-container';

export interface ArticleLoaderProps extends RouteChildrenProps<{ articleId: string }> {
    selectedLanguage: Language;
}

export const ArticleLoader: React.FC<ArticleLoaderProps> = (props) => {
    const [articleId] = useState(
        props.match && props.match.params && props.match.params['articleId']
    );

    const article = articleId
        ? articles.find((article) => article.metadata.id === articleId)
        : undefined;

    return article ? (
        <SectionContainer
            links={
                <React.Fragment>
                    <NavLink to="/blog" className="link">
                        ⬅️ Blog
                    </NavLink>
                </React.Fragment>
            }
            sectionName="article-container"
        >
            <Article {...article} preview={false} selectedLanguage={props.selectedLanguage} />
        </SectionContainer>
    ) : (
        <Error />
    );
};
