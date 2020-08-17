import { ArticleCategory } from '../article-category';
import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const leakedApiKey: Article = {
    content: () => english,
    metadata: {
        category: ArticleCategory.tech,
        date: '2019-06-23',
        duration: 3,
        id: ArticleId.leakedApiKey,
        languages: [Language.en],
        shareImage: 'google-mail.png'
    }
};
