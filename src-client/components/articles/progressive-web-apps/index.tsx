import { ArticleCategory } from '../article-category';
import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const progressiveWebApps: Article = {
    content: () => english,
    metadata: {
        category: ArticleCategory.tech,
        date: '2019-08-12',
        duration: 6,
        id: ArticleId.progressiveWebApps,
        languages: [Language.en],
        shareImage: 'add-home.png'
    }
};
