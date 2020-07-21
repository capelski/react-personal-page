import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Article as IArticle } from './articles/article-data';
import { ArticleId } from './articles/article-id';
import { Language } from './articles/language';

declare const navigator:
    | undefined // Undefined on the server side
    | { share?: (params: { text: string; title: string; url: string }) => void };

interface ArticleBaseProps extends IArticle {
    selectedLanguage: Language;
}

export interface ArticlePreviewProps extends ArticleBaseProps {
    preview: true;
}

export interface ArticleFullProps extends ArticleBaseProps {
    onArticleNavigation: (articleId: ArticleId) => void;
    nextArticle?: IArticle;
    preview: false;
    previousArticle?: IArticle;
    setSelectedLanguage: (language: Language) => void;
}

export type ArticleProps = ArticlePreviewProps | ArticleFullProps;

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

// TODO Create Image component with an optional text footer

export const Article: React.FC<ArticleProps> = (props) => {
    const navigationRef = useRef<HTMLAnchorElement>(null);

    const content = props.content(props.selectedLanguage);

    const containerClickHandler = () => {
        if (props.preview) {
            // Server side required casting. The click will never get triggered in the server anyway
            (navigationRef.current as { click: () => void })?.click();
        }
    };

    const shareHandler = () => {
        navigator!.share!({
            text: content.description,
            title: content.title,
            // TODO Extract url base into environment parameter?
            url: `https://carlescapellas.xyz/article/${props.metadata.id}`
        });
    };

    const articleNavigationHandler = (articleId: ArticleId) => () => {
        if (!props.preview) {
            props.onArticleNavigation(articleId);
        }
    };

    return (
        <div
            className={`article ${props.metadata.id}${props.preview ? '  preview-mode' : ''}`}
            onClick={props.preview ? containerClickHandler : undefined}
        >
            <div className="article-info">
                <h3 className="article-title">{content.title}</h3>
                <div className="article-details">
                    <span className="article-date">📅 {props.metadata.date}</span>
                    <span className="article-duration">🕐 {props.metadata.duration} mins</span>
                    {props.metadata.languages.map((language) => (
                        <React.Fragment>
                            🌎{' '}
                            <span
                                key={language}
                                className={
                                    props.preview
                                        ? ''
                                        : `article-language${
                                              props.selectedLanguage === language
                                                  ? ' selected-language'
                                                  : ''
                                          }`
                                }
                                onClick={
                                    props.preview
                                        ? undefined
                                        : () => props.setSelectedLanguage(language)
                                }
                            >
                                {language}
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className="article-body">
                {content.introduction}
                {props.preview
                    ? null
                    : typeof content.body === 'function'
                    ? content.body({})
                    : content.body}
                {props.preview ? (
                    <NavLink
                        ref={navigationRef}
                        to={`/article/${props.metadata.id}`}
                        className="programmatic-link"
                    />
                ) : (
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
                                            to={`/article/${props.previousArticle.metadata.id}`}
                                            onClick={articleNavigationHandler(
                                                props.previousArticle.metadata.id
                                            )}
                                        >
                                            {
                                                articleLinksContent['previous'][
                                                    props.selectedLanguage
                                                ]
                                            }
                                        </NavLink>
                                        <div className="title-preview">
                                            {
                                                props.previousArticle.content(
                                                    props.selectedLanguage
                                                ).title
                                            }
                                        </div>
                                    </React.Fragment>
                                )}
                            </div>
                            <div className="next-link">
                                {props.nextArticle && (
                                    <React.Fragment>
                                        <NavLink
                                            to={`/article/${props.nextArticle.metadata.id}`}
                                            onClick={articleNavigationHandler(
                                                props.nextArticle.metadata.id
                                            )}
                                        >
                                            {
                                                articleLinksContent['following'][
                                                    props.selectedLanguage
                                                ]
                                            }
                                        </NavLink>{' '}
                                        ➡️
                                        <div className="title-preview">
                                            {
                                                props.nextArticle.content(props.selectedLanguage)
                                                    .title
                                            }
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
                )}
            </div>
        </div>
    );
};
