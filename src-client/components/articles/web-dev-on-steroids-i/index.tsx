import { ArticleCategory } from '../article-category';
import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const webDevOnSteroidsI: Article = {
    content: () => english,
    metadata: {
        category: ArticleCategory.tech,
        date: '2020-02-20',
        duration: 5,
        id: ArticleId.webDevOnSteroidsI,
        languages: [Language.en],
        shareImage: 'intellisense.png'
    }
};
