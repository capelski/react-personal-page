import React, { useEffect, useRef, useState } from 'react';
import { RouteChildrenProps, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Article } from './article';
import { articles } from './articles';
import { ArticleCategory } from './articles/article-category';
import { ArticleId } from './articles/article-id';
import { Error } from './error';
import { SectionContainer } from './section-container';
import { transitionsDuration } from './variables';

export interface ArticleLoaderAdditionalProps {
    selectArticle: (articleId: ArticleId) => void;
    selectedArticleId?: ArticleId;
    selectedCategory: ArticleCategory;
}

export type ArticleLoaderProps = RouteChildrenProps & ArticleLoaderAdditionalProps;

export const ArticleLoader: React.FC<ArticleLoaderProps> = (props) => {
    // We need to keep an owned copy of props.selectedArticleId value to control css exit transitions
    const [currentArticleId, setCurrentArticleId] = useState(props.selectedArticleId);
    const viewportRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setCurrentArticleId(props.selectedArticleId);
    }, [props.selectedArticleId]);

    const selectArticle = (articleId: ArticleId) => {
        setCurrentArticleId(articleId);

        // Setting a timeout so the article exit animation completes
        setTimeout(() => {
            props.selectArticle(articleId);
            // Server side required casting. The scrollTo will never get triggered in the server anyway
            (viewportRef.current as { scrollTo: (params: { top: number }) => void })?.scrollTo({
                top: 0
            });
        }, transitionsDuration);
    };

    let result = <Error />;

    if (props.selectedArticleId) {
        const filteredArticles = articles.filter(
            (article) => article.metadata.category === props.selectedCategory
        );
        const articleIndex = filteredArticles.findIndex(
            (article) => article.metadata.id === props.selectedArticleId
        );
        if (articleIndex > -1) {
            const nextArticle = articleIndex > 0 ? filteredArticles[articleIndex - 1] : undefined;
            const previousArticle =
                articleIndex < filteredArticles.length - 1
                    ? filteredArticles[articleIndex + 1]
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
                    viewportRef={viewportRef}
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
                            />
                        </CSSTransition>
                    ))}
                </SectionContainer>
            );
        }
    }

    return result;
};
