import React from 'react';
import { NavLink } from 'react-router-dom';
import { Article as IArticle } from './articles/article-data';
import { ArticleId } from './articles/article-id';
import { Language } from './articles/language';
import { articleRoute } from './routes';

// TODO Extract base url into environment parameter
const baseUrl = 'https://carlescapellas.xyz';

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
    description: string;
    nextArticle?: IArticle;
    onArticleNavigation: (articleId: ArticleId) => void;
    previousArticle?: IArticle;
    selectedLanguage: Language;
    title: string;
}

export const ArticleNavigation: React.FC<ArticleNavigationProps> = (props) => {
    const articleNavigationHandler = (articleId: ArticleId) => () => {
        props.onArticleNavigation(articleId);
    };

    const shareHandler = () => {
        navigator!.share!({
            text: props.description,
            title: props.title,
            url: `${baseUrl}${articleRoute.path.replace(':articleId', props.articleId)}`
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
                        <React.Fragment>
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
                        </React.Fragment>
                    )}
                </div>
                <div className="next-link">
                    {props.nextArticle && (
                        <React.Fragment>
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
                        </React.Fragment>
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
