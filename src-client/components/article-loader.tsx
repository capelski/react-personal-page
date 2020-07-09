import React, { useState, useEffect } from 'react';
import { RouteChildrenProps, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Article } from './article';
import { articles } from './articles';
import { Article as IArticle } from './articles/article-data';
import { ArticleId } from './articles/article-id';
import { Language } from './articles/language';
import { Error } from './error';
import { SectionContainer } from './section-container';
import { transitionsDuration } from './variables';

export interface ArticleLoaderAdditionalProps {
    activeArticles: IArticle[];
    selectArticle: (articleId: ArticleId) => void;
    selectedArticleId?: ArticleId;
    selectedLanguage: Language;
}

export type ArticleLoaderProps = RouteChildrenProps<{ articleId: string }> &
    ArticleLoaderAdditionalProps;

export const ArticleLoader: React.FC<ArticleLoaderProps> = (props) => {
    // We need to keep an owned copy of props.selectedArticleId value to control css exit transitions
    const [currentArticleId, setCurrentArticleId] = useState(props.selectedArticleId);

    useEffect(() => {
        setCurrentArticleId(props.selectedArticleId);
    }, [props.selectedArticleId]);

    const selectArticle = (articleId: ArticleId) => {
        setCurrentArticleId(articleId);
        // TODO Scroll the section-viewport to the top

        // Setting a timeout so the article exit animation completes
        setTimeout(() => {
            props.selectArticle(articleId);
        }, transitionsDuration);
    };

    let result = <Error />;

    if (props.selectedArticleId) {
        const articleIndex = props.activeArticles.findIndex(
            (article) => article.metadata.id === props.selectedArticleId
        );
        const nextArticle = articleIndex > 0 ? props.activeArticles[articleIndex - 1] : undefined;
        const previousArticle =
            articleIndex < props.activeArticles.length - 1
                ? props.activeArticles[articleIndex + 1]
                : undefined;

        result = (
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
                {articles.map((article) => (
                    <CSSTransition
                        in={article.metadata.id === currentArticleId}
                        timeout={transitionsDuration}
                        classNames="article"
                        unmountOnExit={true}
                    >
                        <Article
                            {...article}
                            nextArticle={nextArticle}
                            preview={false}
                            previousArticle={previousArticle}
                            selectArticle={selectArticle}
                            selectedLanguage={props.selectedLanguage}
                        />
                    </CSSTransition>
                ))}
            </SectionContainer>
        );
    }

    return result;
};
