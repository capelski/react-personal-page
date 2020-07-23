import React from 'react';
import { ArticleId } from './article-id';

interface ArticleVideoProps {
    articleId: ArticleId;
    className?: string;
    filename: string;
}

export const ArticleVideo: React.FC<ArticleVideoProps> = (props) => (
    <video
        controls
        width="100%"
        className={`article-video ${props.className ? props.className : ''}`}
        src={`/images/blog/${props.articleId}/${props.filename}?$modena=react-personal-page`}
    />
);
