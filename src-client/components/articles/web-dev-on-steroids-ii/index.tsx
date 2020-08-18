import { ArticleCategory } from '../article-category';
import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const webDevOnSteroidsII: Article = {
    content: () => english,
    metadata: {
        category: ArticleCategory.tech,
        date: '2020-03-27',
        duration: 6,
        id: ArticleId.webDevOnSteroidsII,
        languages: [Language.en],
        shareImage: 'coverage-report.png'
    }
};
