import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Article } from '../article';
import { articles } from '../articles';
import { ArticleCategory } from '../articles/article-category';
import { Language } from '../articles/language';
import { articleRoute, blogRoute } from '../routes';
import { SectionContainer } from '../section-container';
import { transitionsDuration } from '../variables';
import { Error } from './error';

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

    // Protection against non-existing urls (e.g. /blog/non-existing)
    const currentArticle = filteredArticles.find(
        (article) => article.metadata.id === currentArticleId
    );
    const articleContent = currentArticle?.content(selectedLanguage);

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
            <Helmet>
                <title>{articleContent!.title} | Carles Capellas</title>
                <meta name="description" content={articleContent!.description} />
                <meta property="og:site_name" content="Carles Capellas" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={articleContent!.title} />
                <meta property="og:description" content={articleContent!.description} />
                <meta
                    property="og:url"
                    content={`${process.env.PRODUCTION_URL_BASE}${articleRoute.path.replace(
                        ':articleId',
                        currentArticle.metadata.id
                    )}`}
                />
                {currentArticle.metadata.shareImage ? (
                    <meta
                        property="og:image"
                        content={`${process.env.PRODUCTION_URL_BASE}/images/blog/${currentArticle.metadata.id}/${currentArticle.metadata.shareImage}`}
                    />
                ) : undefined}
            </Helmet>
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
