import { ArticleId } from './article-id';
import { Language } from './language';
import { ArticleCategory } from './article-category';

export interface ArticleContent {
    body: JSX.Element | React.FC<{}>;
    description: string;
    introduction: JSX.Element;
    // TODO Make mandatory
    shareSentence?: string;
    title: string;
}

export interface ArticleMetadata {
    category: ArticleCategory;
    date: string;
    duration: number;
    id: ArticleId;
    languages: Language[];
    shareImage?: string;
}

export interface Article {
    content: (language: Language) => ArticleContent;
    following?: ArticleId;
    metadata: ArticleMetadata;
    previous?: ArticleId;
}
