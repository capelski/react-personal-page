import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Article as IArticle } from './articles/article-data';
import { ArticleId } from './articles/article-id';
import { Language } from './articles/language';

interface ArticleBaseProps extends IArticle {
    selectArticle: (articleId: ArticleId) => void;
    selectedLanguage: Language;
}

export interface ArticlePreviewProps extends ArticleBaseProps {
    preview: true;
}

export interface ArticleFullProps extends ArticleBaseProps {
    preview: false;
    nextArticle?: IArticle;
    previousArticle?: IArticle;
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

// Server side required casting. The share will never get triggered in the server anyway
const navigator = (this as {
    navigator?: { share: (params: { text: string; title: string; url: string }) => void };
}).navigator;
const isShareAvailable = navigator && 'share' in navigator;

export const Article: React.FC<ArticleProps> = (props) => {
    const navigationRef = useRef<HTMLAnchorElement>(null);

    const content = props.content(props.selectedLanguage);

    const clickHandler = () => {
        if (props.preview) {
            props.selectArticle(props.metadata.id);
            // Server side required casting. The click will never get triggered in the server anyway
            (navigationRef.current as { click: () => void })?.click();
        }
    };

    const shareHandler = () => {
        if (isShareAvailable) {
            navigator!.share({
                text: content.description,
                title: content.title,
                // TODO Extract url base into environment parameter?
                url: `https://carlescapellas.xyz/article/${props.metadata.id}/${props.selectedLanguage}`
            });
        }
    };

    const selectArticle = (articleId: ArticleId) => () => props.selectArticle(articleId);

    return (
        <div
            className={`article${props.preview ? '  preview-mode' : ''}`}
            onClick={props.preview ? clickHandler : undefined}
        >
            <div className="article-info">
                <h3 className="article-title">{content.title}</h3>
                <div className="article-details">
                    <span className="article-date">📅 {props.metadata.date}</span>
                    <span className="article-duration">🕐 {props.metadata.duration} mins</span>
                    {props.metadata.languages.map((language) => (
                        <span key={language} className="article-language">
                            🌎 {language}
                        </span>
                    ))}
                </div>
            </div>
            <div className="article-body">
                {content.introduction}
                {props.preview ? null : content.body}
                {props.preview ? (
                    <NavLink
                        ref={navigationRef}
                        to={`/article/${props.metadata.id}/${props.selectedLanguage}`}
                        className="programmatic-link"
                        onClick={selectArticle(props.metadata.id)}
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
                                        {' '}
                                        ⬅️{' '}
                                        <NavLink
                                            to={`/article/${props.previousArticle.metadata.id}/${props.selectedLanguage}`}
                                            onClick={selectArticle(
                                                props.previousArticle!.metadata.id
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
                                            to={`/article/${props.nextArticle.metadata.id}/${props.selectedLanguage}`}
                                            onClick={selectArticle(props.nextArticle!.metadata.id)}
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
                        {isShareAvailable && (
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
