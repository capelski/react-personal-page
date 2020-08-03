import { ArticleCategory } from '../article-category';
import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const subscribersList: Article = {
    content: () => english,
    metadata: {
        category: ArticleCategory.tech,
        date: '2019-09-13',
        duration: 4,
        id: ArticleId.subscribersList,
        languages: [Language.en],
        shareImage: 'signup-form.png'
    }
};
