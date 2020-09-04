import { ArticleCategory } from '../article-category';
import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const linearGradient: Article = {
    content: () => english,
    metadata: {
        category: ArticleCategory.tech,
        date: '2020-09-04',
        duration: 3,
        id: ArticleId.linearGradient,
        languages: [Language.en],
        shareImage: 'wheel.png'
    }
};
