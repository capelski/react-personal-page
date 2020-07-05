import React from 'react';
import { Article as IArticle } from './articles/article-data';
import { Language } from './articles/language';

interface ArticleProps extends IArticle {
    preview: boolean;
    selectedLanguage: Language;
}

export const Article: React.FC<ArticleProps> = (props) => {
    const content = props.content(props.selectedLanguage);
    return (
        <div className="article">
            <div className="article-info">
                <h3 className="article-title">{content.title}</h3>
                <div className="article-details">
                    <span className="article-date">📅 {props.metadata.date}</span>
                    <span className="article-duration">🕐 {props.metadata.duration} mins</span>
                    {props.metadata.languages.map((language) => (
                        <span className="article-language">🌎 {language}</span>
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
