import React from 'react';
import { NavLink } from 'react-router-dom';
import { Article as IArticle } from './articles/article-data';
import { ArticleId } from './articles/article-id';
import { Language } from './articles/language';
import { articleRoute } from './routes';

declare const navigator:
    | undefined // Undefined on the server side
    | { share?: (params: { text: string; title: string; url: string }) => void };

const articleLinksContent: { [key: string]: { [Language.ca]: string; [Language.en]: string } } = {
    following: {
        ca: 'Següent',
        en: 'Following'
    },
    previous: {
        ca: 'Anterior',
        en: 'Previous'
    },
    postsTimeline: {
        ca: 'Històric de posts',
        en: 'Posts timeline'
    }
};

export interface ArticleNavigationProps {
    articleId: ArticleId;
    nextArticle?: IArticle;
    onArticleNavigation: (articleId: ArticleId) => void;
    previousArticle?: IArticle;
    selectedLanguage: Language;
    shareSentence: string;
    title: string;
}

export const ArticleNavigation: React.FC<ArticleNavigationProps> = (props) => {
    const articleNavigationHandler = (articleId: ArticleId) => () => {
        props.onArticleNavigation(articleId);
    };

    const shareHandler = () => {
        navigator!.share!({
            text: props.shareSentence,
            title: props.title,
            url: `${process.env.PRODUCTION_URL_BASE}${articleRoute.path.replace(
                ':articleId',
                props.articleId
            )}`
        });
    };

    return (
        <React.Fragment>
            <h3 className="posts-timeline">
                {articleLinksContent['postsTimeline'][props.selectedLanguage]}
            </h3>
            <div className="article-links">
                <div className="previous-link">
                    {props.previousArticle && (
                        <span className="link-text">
                            ⬅️{' '}
                            <NavLink
                                to={articleRoute.path.replace(
                                    ':articleId',
                                    props.previousArticle.metadata.id
                                )}
                                onClick={articleNavigationHandler(
                                    props.previousArticle.metadata.id
                                )}
                            >
                                {articleLinksContent['previous'][props.selectedLanguage]}
                            </NavLink>
                            <div className="title-preview">
                                {props.previousArticle.content(props.selectedLanguage).title}
                            </div>
                        </span>
                    )}
                </div>
                <div className="next-link">
                    {props.nextArticle && (
                        <span className="link-text">
                            <NavLink
                                to={articleRoute.path.replace(
                                    ':articleId',
                                    props.nextArticle.metadata.id
                                )}
                                onClick={articleNavigationHandler(props.nextArticle.metadata.id)}
                            >
                                {articleLinksContent['following'][props.selectedLanguage]}
                            </NavLink>{' '}
                            ➡️
                            <div className="title-preview">
                                {props.nextArticle.content(props.selectedLanguage).title}
                            </div>
                        </span>
                    )}
                </div>
            </div>
            {typeof navigator !== 'undefined' && navigator.share && (
                <div className="share-button">
                    <img
                        src="/images/share.png?$modena=react-personal-page"
                        onClick={shareHandler}
                    />
                </div>
            )}
        </React.Fragment>
    );
};
