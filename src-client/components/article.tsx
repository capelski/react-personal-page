import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Article as IArticle } from './articles/article-data';
import { ArticleId } from './articles/article-id';
import { Language } from './articles/language';
import { ArticleNavigation } from './article-navigation';
import { articleRoute } from './routes';

interface ArticleBaseProps extends IArticle {
    selectedLanguage: Language;
}

export interface ArticlePreviewProps extends ArticleBaseProps {
    preview: true;
}

export interface ArticleFullProps extends ArticleBaseProps {
    nextArticle?: IArticle;
    onArticleNavigation: (articleId: ArticleId) => void;
    preview: false;
    previousArticle?: IArticle;
    setSelectedLanguage: (language: Language) => void;
}

export type ArticleProps = ArticlePreviewProps | ArticleFullProps;

export const Article: React.FC<ArticleProps> = (props) => {
    const navigationRef = useRef<HTMLAnchorElement>(null);

    const content = props.content(props.selectedLanguage);

    const containerClickHandler = () => {
        if (props.preview) {
            // Server side required casting. The click will never get triggered in the server anyway
            (navigationRef.current as { click: () => void })?.click();
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
                        to={articleRoute.path.replace(':articleId', props.metadata.id)}
                        className="programmatic-link"
                    />
                ) : (
                    <ArticleNavigation
                        articleId={props.metadata.id}
                        shareSentence={content.shareSentence || content.description}
                        onArticleNavigation={props.onArticleNavigation}
                        nextArticle={props.nextArticle}
                        previousArticle={props.previousArticle}
                        selectedLanguage={props.selectedLanguage}
                        title={content.title}
                    />
                )}
            </div>
        </div>
    );
};
