import React from 'react';
import { RouteChildrenProps, NavLink } from 'react-router-dom';
import { Article } from './article';
import { Article as IArticle } from './articles/article-data';
import { Language } from './articles/language';
import { Error } from './error';
import { SectionContainer } from './section-container';
import { ArticleId } from './articles/article-id';

export interface ArticleLoaderAdditionalProps {
    activeArticles: IArticle[];
    selectArticle: (articleId: ArticleId) => void;
    selectedArticleId?: ArticleId;
    selectedLanguage: Language;
}

export type ArticleLoaderProps = RouteChildrenProps<{ articleId: string }> &
    ArticleLoaderAdditionalProps;

export const ArticleLoader: React.FC<ArticleLoaderProps> = (props) => {
    const articleIndex = props.selectedArticleId
        ? props.activeArticles.findIndex(
              (article) => article.metadata.id === props.selectedArticleId
          )
        : -1;

    let result = <Error />;

    if (articleIndex > -1) {
        const article = props.activeArticles[articleIndex];
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
                <Article
                    {...article}
                    nextArticle={nextArticle}
                    preview={false}
                    previousArticle={previousArticle}
                    selectArticle={props.selectArticle}
                    selectedLanguage={props.selectedLanguage}
                />
            </SectionContainer>
        );
    }

    return result;
};
