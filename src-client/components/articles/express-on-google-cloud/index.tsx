import { ArticleCategory } from '../article-category';
import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const expressOnGoogleCloud: Article = {
    content: () => english,
    metadata: {
        category: ArticleCategory.tech,
        date: '2020-09-30',
        duration: 6,
        id: ArticleId.expressOnGoogleCloud,
        languages: [Language.en],
        shareImage: 'gcp-app-engine-creation.png'
    }
};
