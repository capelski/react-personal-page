import { ArticleId } from './article-id';
import { Language } from './language';

// TODO Add a sentence for sharing, similar to description but calling to action
export interface ArticleContent {
    body: JSX.Element;
    description: string;
    introduction: JSX.Element;
    title: string;
}

export interface ArticleMetadata {
    date: string;
    duration: number;
    id: ArticleId;
    languages: Language[];
}

export interface Article {
    content: (language: Language) => ArticleContent;
    following?: ArticleId;
    metadata: ArticleMetadata;
    previous?: ArticleId;
}
