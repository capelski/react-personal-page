import React from 'react';
import { useHistory } from 'react-router-dom';
import { Article as IArticle } from './articles/article-data';
import { Language } from './articles/language';

export interface ArticleProps extends IArticle {
    preview: boolean;
    selectedLanguage: Language;
}

export const Article: React.FC<ArticleProps> = (props) => {
    const history = useHistory();
    const content = props.content(props.selectedLanguage);
    const clickHandler = () => {
        history.push(`/blog/${props.metadata.id}`);
    };

    // TODO Include a hidden navLink to the article url for SEO purposes

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
            </div>
        </div>
    );
};
