import React, { useEffect, useRef, useState } from 'react';
import { RouteChildrenProps, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Article } from './article';
import { articles } from './articles';
import { ArticleCategory } from './articles/article-category';
import { Language } from './articles/language';
import { Error } from './error';
import { blogRoute } from './routes';
import { SectionContainer } from './section-container';
import { transitionsDuration } from './variables';

export interface ArticleLoaderAdditionalProps {
    selectedCategory: ArticleCategory;
}

export type ArticleLoaderProps = RouteChildrenProps<{ articleId?: string }> &
    ArticleLoaderAdditionalProps;

export const ArticleLoader: React.FC<ArticleLoaderProps> = (props) => {
    const articleIdInUrl = props.match?.params['articleId'];

    // We need to keep an owned copy of props.match?.params['articleId'] value
    // to control css exit transitions
    const [currentArticleId, setCurrentArticleId] = useState(articleIdInUrl);
    const [selectedLanguage, setSelectedLanguage] = useState(Language.en);

    const viewportRef = useRef<HTMLDivElement>(null);
    const filteredArticles = articles.filter(
        (article) => article.metadata.category === props.selectedCategory
    );

    useEffect(() => {
        // When the articleId in the url is modified we need to update the currentArticleId,
        // except when articleId is undefined (e.g. the component is being unmounted)
        articleIdInUrl && setCurrentArticleId(articleIdInUrl);
    }, [articleIdInUrl]);

    const onArticleExit = () => {
        setSelectedLanguage(Language.en);
        (viewportRef.current as { scrollTo: (params: { top: number }) => void })?.scrollTo({
            top: 0
        });
    };

    // Protection against non-existing urls (e.g. /article/non-existing)
    const currentArticle = filteredArticles.find(
        (article) => article.metadata.id === currentArticleId
    );

    return currentArticle ? (
        <SectionContainer
            links={
                <React.Fragment>
                    <NavLink to={blogRoute.path} className="link">
                        ⬅️ Blog
                    </NavLink>
                </React.Fragment>
            }
            sectionName="article-container"
            viewportRef={viewportRef}
        >
            {filteredArticles.map((article) => {
                const articleIndex = filteredArticles.findIndex(
                    (a) => a.metadata.id === article.metadata.id
                );
                const nextArticle =
                    articleIndex > 0 ? filteredArticles[articleIndex - 1] : undefined;
                const previousArticle =
                    articleIndex < filteredArticles.length - 1
                        ? filteredArticles[articleIndex + 1]
                        : undefined;

                return (
                    <CSSTransition
                        classNames="article"
                        in={article.metadata.id === currentArticleId}
                        onExited={onArticleExit}
                        timeout={transitionsDuration}
                        unmountOnExit={true}
                    >
                        <Article
                            {...article}
                            nextArticle={nextArticle}
                            onArticleNavigation={setCurrentArticleId}
                            preview={false}
                            previousArticle={previousArticle}
                            selectedLanguage={selectedLanguage}
                            setSelectedLanguage={setSelectedLanguage}
                        />
                    </CSSTransition>
                );
            })}
        </SectionContainer>
    ) : (
        <Error />
    );
};
