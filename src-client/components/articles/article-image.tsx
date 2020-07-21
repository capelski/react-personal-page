import React from 'react';
import { ArticleId } from './article-id';

interface ArticleImageProps {
    articleId: ArticleId;
    alt: string;
    className?: string;
    filename: string;
    footer?: string;
}

export const ArticleImage: React.FC<ArticleImageProps> = (props) => (
    <React.Fragment>
        <img
            className={`article-image${props.footer ? ' with-footer' : ''} ${
                props.className ? props.className : ''
            }`}
            src={`/images/blog/${props.articleId}/${props.filename}?$modena=react-personal-page`}
            alt={props.alt}
        />
        {props.footer ? <p className="article-image-footer">{props.footer}</p> : null}
    </React.Fragment>
);
