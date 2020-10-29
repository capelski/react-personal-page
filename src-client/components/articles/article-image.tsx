import React, { useState } from 'react';
import { ArticleId } from './article-id';

interface ArticleImageProps {
    articleId: ArticleId;
    alt: string;
    className?: string;
    filename: string;
    footer?: string;
}

export const ArticleImage: React.FC<ArticleImageProps> = (props) => {
    const [loadError, setLoadError] = useState(false);
    return (
        <div>
            <img
                className={`article-image${props.footer ? ' with-footer' : ''}${
                    loadError ? ' image-placeholder' : ''
                }${props.className ? ' ' + props.className : ''}`}
                src={`/images/blog/${props.articleId}/${props.filename}?$modena=react-personal-page`}
                alt={props.alt}
                onError={() => {
                    setLoadError(true);
                }}
            />
            {props.footer ? <p className="article-image-footer">{props.footer}</p> : null}
        </div>
    );
};
